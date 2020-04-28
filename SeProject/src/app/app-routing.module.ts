import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CategoriesComponent} from './categories/categories.component';
import {OrganisationsComponent} from './organisations/organisations.component';
import {MapComponent} from './map/map.component';
import {FacultiesComponent} from './faculties/faculties.component';
import {ContactUsComponent} from './contact-us/contact-us.component';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'faculties', component: FacultiesComponent},
  {path: 'organisations', component: OrganisationsComponent},
  {path: 'map', component: MapComponent},
  {path: 'contact', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
