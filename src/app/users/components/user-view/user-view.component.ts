import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/swagger/models';
import { AppRoutes } from 'src/app/models/app-routes.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

    @Input() user!: User;
    routeView: string = '../' + AppRoutes.USER_ID;
    routeEdit: string = '../' + AppRoutes.EDIT;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        if (!this.user) throw Error('Usuario requerido');
    }

    deleteUser() {
        if(this.user.id) this.userService.deleteUser(this.user.id).subscribe( res => console.log("borrado:",res));
    }

}
