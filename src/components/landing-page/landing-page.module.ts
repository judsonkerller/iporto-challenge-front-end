import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInscricaoComponent } from './form-inscricao/form-inscricao.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    FormInscricaoComponent,
    DepoimentosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LandingPageModule { }
