import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Faculty} from '../models/faculties';
import {FacultiesService} from '../services/faculties.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {

  fac: Faculty;
  constructor(private route: ActivatedRoute, private service: FacultiesService) { }

  ngOnInit(): void {
    this.getFaculty();
  }

  getFaculty(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getFaculty(id).subscribe(faculty => this.fac = faculty);
  };
}
