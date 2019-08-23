import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact';

const routes: Routes = [
  {path: 'pages/contact', component: ContactComponent},

];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ], declarations: [
    ContactComponent
  ]
})
export class PageModule {

}
