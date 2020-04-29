import { Injectable } from '@angular/core';
import {categories, Category} from '../models/categories';
import {Observable, of} from 'rxjs';
import {faculties, Faculty} from '../models/faculties';

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {

  getFaculties(id:number):Observable<Faculty[]>{
    return of(faculties.filter(fac => fac.category_id === id));
  }

  getCategoryType() : Observable<Category[]>{
    return of(categories);
  }

  getFaculty(id:number): Observable<Faculty>{
    return of(faculties.find(fac => fac.id === id));
  }
  // categories = categories;
  //
  // public getFacultiesByCategoryId(categoryId: number): Observable<Faculty[]> {
  //   return of(faculties.filter(fac => this.categories.find(c => c.id === categoryId).list.includes(fac.id)));
  // }
  constructor() { }

}
