import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/swagger/models';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/models/app-routes.model';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styles: [
    ]
})
export class NewUserComponent implements OnInit {

    userForm = new FormGroup({
        birthDate: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        firstname: new FormControl('', Validators.required),
        id: new FormControl(0, Validators.required),
        lastname: new FormControl('', Validators.required),
        address: new FormGroup({
            city: new FormControl('', Validators.required),
            country: new FormControl<'ES' | 'UK' | 'DE' | 'US'>('ES', Validators.required),
            id: new FormControl(0, Validators.required),
            postalcode: new FormControl('', Validators.required),
            street: new FormControl('', Validators.required)
        }, Validators.required),
    });
    countriesOptions: string[] = ['ES', 'UK', 'DE', 'US'];

    constructor(
        private userService: UserService,
        private router: Router,
        private snackbar: MatSnackBar,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        if (!this.router.url.includes(AppRoutes.EDIT.replace(':id', ''))) return; // Crear usuario

        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.userService.getUserById(id)),
            ).subscribe((user: User | undefined) => {
                if (!user) return this.router.navigateByUrl(`../${AppRoutes.LIST}`);
                return this.userForm.reset(user);
            });
    }

    get currentUser(): User {
        const user = this.userForm.value as User;
        return user;
    }

    onSubmit() {
        if (this.userForm.valid) {
            if (this.currentUser.id && this.currentUser?.id > 0) {
                this.userService.updateUser(this.currentUser).subscribe(user => {
                    this.snackbar.open("Usuario actualizado", "Cerrar", { duration: 3000 })
                    this.router.navigate(['/' + AppRoutes.USERS + '/' + AppRoutes.USER_ID.replace(':id', user.id?.toString() || "")])
                });
                return;
            }
            this.userService.addUser(this.currentUser).subscribe(user => {
                this.snackbar.open("Usuario creado", "Cerrar", { duration: 3000 })
                this.router.navigate(['/' + AppRoutes.USERS + '/' + AppRoutes.USER_ID.replace(':id', user.id?.toString() || "")])
            });
            return;
        }
    }

    deleteUser() {
        if(this.currentUser.id) this.userService.deleteUser(this.currentUser.id).subscribe( res => {
            this.snackbar.open("Usuario borrado", "Cerrar", { duration: 3000 })
            this.router.navigate(['/' + AppRoutes.USERS + '/' + AppRoutes.LIST])
        });
    }
}
