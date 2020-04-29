import { Component, OnInit } from '@angular/core';
import {Organisation} from '../models/organisations';
import {ActivatedRoute} from '@angular/router';
import {OrganisationsService} from '../services/organisations.service';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {
  organisations: Organisation[];
  id;
  constructor(private route: ActivatedRoute, private service: OrganisationsService) { }

  ngOnInit(): void {
    this.getCategoryId();
    this.getOrganisations();
  }

  getCategoryId():void{
    this.id = +this.route.snapshot.paramMap.get('categoryId');
  }

  public getOrganisations() {
    this.service.getOrganisations(this.id)
      .subscribe(org => this.organisations = org);
  }
}
