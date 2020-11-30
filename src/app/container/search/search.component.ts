import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // searchForm: FormGroup;
  query: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    // this.searchForm = new FormGroup({
    //   query: new FormControl(''),
    // });
  }

  fetchResult = (event: KeyboardEvent) => {
    setTimeout(() => {
      this.searchService.fetchImages(this.query).subscribe((data) => {
        console.log(data);
      });
    }, 100);
  }
}
