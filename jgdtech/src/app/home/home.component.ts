import { Component, OnInit } from '@angular/core';
import { Image} from '../shared/image';
import { IMAGES } from '../shared/images';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = IMAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
