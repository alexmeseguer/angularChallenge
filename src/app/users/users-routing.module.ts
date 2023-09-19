import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AppRoutes } from '../models/app-routes.model';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: AppRoutes.NEW_USER, component: NewUserComponent },
            { path: AppRoutes.SEARCH, component: SearchComponent },
            { path: AppRoutes.EDIT, component: NewUserComponent },
            { path: AppRoutes.LIST, component: ListComponent },
            // Lo colocamos al final porque de lo contrario siempre entraría en este hijo
            { path: AppRoutes.USER_ID, component: UserPageComponent },
            { path: '**', redirectTo: AppRoutes.LIST }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
