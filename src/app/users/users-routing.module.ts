import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'new-user', component: NewUserComponent },
            { path: 'search', component: SearchComponent },
            { path: 'edit/:id', component: NewUserComponent },
            { path: 'list', component: ListComponent },
            // Lo colocamos al final porque de lo contrario siempre entraría en este hijo
            { path: ':id', component: UserPageComponent },
            { path: '**', redirectTo: 'list' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
