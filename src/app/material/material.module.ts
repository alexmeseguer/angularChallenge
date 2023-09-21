import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatIconModule
    ]
})
export class MaterialModule { }
