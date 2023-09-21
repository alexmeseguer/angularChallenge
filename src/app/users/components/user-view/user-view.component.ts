import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/swagger/models';
import { AppRoutes } from 'src/app/models/app-routes.model';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

    @Input() user!: User;
    routeEdit: string = '../' + AppRoutes.USER_ID;

    ngOnInit(): void {
        if (!this.user) throw Error('Usuario requerido');
    }

}
