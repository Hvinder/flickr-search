import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  imageUrl = `https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg`;

  constructor() { }

  ngOnInit() {
  }

}
