import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';
import { User } from 'src/swagger/models';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: [
    ]
})
export class ListComponent implements OnInit {

    users: User[] = [];

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => this.users = users);
    }

}
