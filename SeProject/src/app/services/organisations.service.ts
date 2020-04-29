import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {categories, Category} from '../models/categories';
import {Organisation, organisations} from '../models/organisations';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  getOrganisations(id:number):Observable<Organisation[]>{
    return of(organisations.filter(org => org.category_id === id));
  }

  getOrganisation(id:number): Observable<Organisation> {
    return of(organisations.find(org => org.id === id));
  }

  constructor() { }

}
