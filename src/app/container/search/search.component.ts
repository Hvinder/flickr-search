import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/core/search.service';
import { ApiResponse } from 'src/app/types/api-response.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string;
  resultData: ApiResponse;

  private reactionsTrigger$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.reactionsTrigger$
      .pipe(
        switchMap(() => this.searchService.fetchImages(this.query)),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => this.resultData = data);
  }

  fetchResult = (event: KeyboardEvent) => {
    setTimeout(() => {
      this.reactionsTrigger$.next();
    }, 100);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
