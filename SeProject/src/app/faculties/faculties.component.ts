import { Component, OnInit } from '@angular/core';
import {Faculty} from '../faculties';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  faculties: Faculty[];
  name;

  constructor(private route: ActivatedRoute, private service: CategoriesService) { }

  ngOnInit(): void {
    this.getId();
    this.getFacultyByName();
  }

  getId(): void{
    this.name = this.route.snapshot.paramMap.get('category_name');
  }

  getFacultyByName(): void {
    this.service.getFacultyByName(this.name)
      .subscribe(faculties => this.faculties = faculties);
  }

}
