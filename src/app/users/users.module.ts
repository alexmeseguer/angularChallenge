import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { SearchComponent } from './pages/search/search.component';
import { MaterialModule } from '../material/material.module';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserImagePipe } from './pipes/user-image.pipe';
import { UserCountryPipe } from './pipes/user-country.pipe';


@NgModule({
    declarations: [
        UserPageComponent,
        LayoutComponent,
        ListComponent,
        NewUserComponent,
        SearchComponent,
        UserViewComponent,
        UserImagePipe,
        UserCountryPipe
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        MaterialModule
    ]
})
export class UsersModule { }
