import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/users/services/user.service';
import { User } from 'src/swagger/models';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: []
})
export class ListComponent implements OnInit {

    users: Observable<User[]> = of([]);

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.refreshUsers();
        this.users = this.userService.getUsers();
    }

}
