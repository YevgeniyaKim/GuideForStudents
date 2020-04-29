import {Injectable} from '@angular/core';
import {categories, Category} from '../models/categories';
import {Observable, of} from 'rxjs';
import {faculties, Faculty} from '../models/faculties';

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {

  getFaculties(id: number): Observable<Faculty[]> {
    return of(faculties);
  }

  getCategoryType(): Observable<Category[]> {
    return of(categories);
  }

  getFaculty(id: number): Observable<Faculty> {
    return of(faculties.find(fac => fac.id === id));
  }

  constructor() {
  }

}
