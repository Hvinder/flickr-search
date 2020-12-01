import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query: string;
  @Output() queryEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  queryChange = (event: KeyboardEvent) => {
    setTimeout(() => {
      this.queryEmitter.emit(this.query);
    }, 100);
  }
}
