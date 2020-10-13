import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page';
import { MyheaderComponent } from './myheader';
import { FormComponent } from './form';
const routes: Routes = [
{ path: 'form',component: FormComponent },
{ path: 'contact-page',component: ContactPageComponent },
{ path: '**',redirectTo: 'contact-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
