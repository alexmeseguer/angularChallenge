import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
    declarations: [
    UserPageComponent,
    LayoutComponent,
    ListComponent,
    NewUserComponent,
    SearchComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ]
})
export class UsersModule { }
