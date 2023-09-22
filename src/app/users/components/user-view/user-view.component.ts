import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/swagger/models';
import { AppRoutes } from 'src/app/models/app-routes.model';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html'
})
export class UserViewComponent implements OnInit {

    @Input() user!: User;
    routeView: string = '../' + AppRoutes.USER_ID;
    routeEdit: string = '../' + AppRoutes.EDIT;

    constructor(
        private userService: UserService,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit(): void {
        if (!this.user) throw Error('Usuario requerido');
    }

    deleteUser() {
        if (this.user.id)
            this.userService.deleteUser(this.user.id).subscribe(res => {
                if (res) {
                    this.snackbar.open("Usuario borrado", "Cerrar", { duration: 3000 });
                    this.userService.refreshUsers();
                }
            });
    }

}
