import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoriesComponent } from './categories/categories.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { MapComponent } from './map/map.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { OrganisationDetailsComponent } from './organisation-details/organisation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CategoriesComponent,
    FacultiesComponent,
    MapComponent,
    OrganisationsComponent,
    ContactUsComponent,
    FacultyDetailsComponent,
    OrganisationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
