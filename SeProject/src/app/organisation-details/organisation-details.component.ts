import {Component, OnInit} from '@angular/core';
import {Organisation} from '../models/organisations';
import {ActivatedRoute} from '@angular/router';
import {FacultiesService} from '../services/faculties.service';
import {OrganisationsService} from '../services/organisations.service';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.css']
})
export class OrganisationDetailsComponent implements OnInit {

  org: Organisation;

  constructor(private route: ActivatedRoute, private service: OrganisationsService) {
  }

  ngOnInit(): void {
    this.getOrganisation();
  }

  getOrganisation() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getOrganisation(id).subscribe(org => this.org = org);
  };
}
