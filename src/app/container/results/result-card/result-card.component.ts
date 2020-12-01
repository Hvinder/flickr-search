import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/types/api-response.type';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  // @Input() photo: Photo;
  @Input() set photoData(value: Photo) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
