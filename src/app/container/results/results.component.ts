import { Component, Input, OnInit } from '@angular/core';
import { Photo, Photos } from 'src/app/types/api-response.type';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  // @Input() photos: Photos;
  @Input() set photos(value: Photos) {
    this.photosList = value.photo;
    console.log(this.photosList)
  }

  photosList: Photo[];

  constructor() { }

  ngOnInit() {
  }

  getImageUrl(index: number): string {
    const photo: Photo = this.photosList[index];
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
  }

}
