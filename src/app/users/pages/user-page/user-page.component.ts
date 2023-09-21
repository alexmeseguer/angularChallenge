import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { User } from 'src/swagger/models';
import { AppRoutes } from 'src/app/models/app-routes.model';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styles: [
    ]
})
export class UserPageComponent implements OnInit {

    user?: User;

    constructor(
        private userService: UserService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.pipe(
            // Delay simplemente colocado para visualizar el loading, ya que al ser localhost todo tarda poco.
            delay(500),
            switchMap(({ id }) => this.userService.getUserById(id)))
            .subscribe((user: User | undefined) => {
                if (!user) return this.router.navigateByUrl(AppRoutes.LIST);

                this.user = user;
                console.log(this.user);
                return;
            });
    }

    goBack() {
        this.router.navigateByUrl("/" + AppRoutes.USERS + "/" + AppRoutes.LIST)
    }
}
