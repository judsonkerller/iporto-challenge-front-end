import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppMenuComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppHeaderComponent,
    AppMenuComponent,
    AppFooterComponent
  ]
})
export class LayoutModule { }
