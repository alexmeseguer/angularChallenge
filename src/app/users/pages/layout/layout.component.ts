import { Component } from '@angular/core';
import { AppRoutes } from 'src/app/models/app-routes.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

    sidebarItems: {label: string, icon: string, url: string}[] = [
        {label: 'Listado', icon: 'list', url: AppRoutes.LIST},
        {label: 'Crear usuario', icon: 'add', url: AppRoutes.NEW_USER},
        {label: 'Buscar usuario', icon: 'search', url: AppRoutes.SEARCH}
    ];

}
