import { Component, OnInit } from '@angular/core';
import {categories, Category} from '../categories';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private service: CategoriesService) {
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(): void {
    this.service.getCategoryType()
      .subscribe(categories => this.categories = categories);
  }

}
