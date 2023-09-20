import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/swagger/models';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

    @Input() user!: User;

    ngOnInit(): void {
        if (this.user) throw Error('Usuario requerido');
    }

}
