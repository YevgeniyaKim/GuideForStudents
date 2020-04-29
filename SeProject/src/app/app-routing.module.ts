import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CategoriesComponent} from './categories/categories.component';
import {OrganisationsComponent} from './organisations/organisations.component';
import {MapComponent} from './map/map.component';
import {FacultiesComponent} from './faculties/faculties.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FacultyDetailsComponent} from './faculty-details/faculty-details.component';
import {OrganisationDetailsComponent} from './organisation-details/organisation-details.component';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:categoryId/faculties', component: FacultiesComponent},
  {path: 'categories/:categoryId/faculties/:id', component: FacultyDetailsComponent},
  // {path: 'organisations', component: OrganisationsComponent},
  // {path: 'organisations/:id', component: OrganisationDetailsComponent}
  // {path: 'map', component: MapComponent},
  // {path: 'contact', component: ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
