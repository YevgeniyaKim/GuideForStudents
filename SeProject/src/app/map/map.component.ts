import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private image = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  get imgPath() {
    return 'assets/' + this.image + '.png';
  }

  next() {
    this.image = (this.image + 1) % 3;
  }

  prev() {
    this.image -= 1;
    if (this.image < 0) {
      this.image = 2;
    }
  }
}
