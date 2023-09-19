import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AppRoutes } from './models/app-routes.model';

const routes: Routes = [
    {
        path: AppRoutes.USERS,
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
        path: AppRoutes.ErrorPage,
        component: Error404PageComponent
    },
    {
        path: '',
        redirectTo: AppRoutes.USERS,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: AppRoutes.ErrorPage
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
