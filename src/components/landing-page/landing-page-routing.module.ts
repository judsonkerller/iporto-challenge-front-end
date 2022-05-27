import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { FormInscricaoComponent } from './form-inscricao/form-inscricao.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'index',
    component: LandingPageComponent
  },
  {
    path: 'inscricao',
    component: FormInscricaoComponent
  },
  {
    path: 'depoimentos',
    component: DepoimentosComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
