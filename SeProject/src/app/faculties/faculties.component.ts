import { Component, OnInit } from '@angular/core';
import {Faculty} from '../models/faculties';
import {ActivatedRoute} from '@angular/router';
import {FacultiesService} from '../services/faculties.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  faculties: Faculty[];
  id;

  constructor(private route: ActivatedRoute, private service: FacultiesService) { }

  ngOnInit(): void {
    this.getCategoryId();
    this.getFaculties();
  }

  getCategoryId():void{
    this.id = +this.route.snapshot.paramMap.get('categoryId');
  }

  public getFaculties() {
    this.service.getFaculties(this.id)
      .subscribe(faculties => this.faculties = faculties);
  }

}
