import { Injectable } from '@angular/core';
import {categories, Category} from './categories';
import {Observable, of} from 'rxjs';
import {faculties, Faculty} from './faculties';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategoryType(): Observable<Category[]>{
    return of(categories);
  }

  getFacultyByName(name: string): Observable<Faculty[]> {
    return of(faculties.filter(fac => fac.category_name === name));
  }

  getFaculty(id: number): Observable<Faculty>{
    return of(faculties.find(fac => fac.id === id));
  }

  constructor() { }

}
