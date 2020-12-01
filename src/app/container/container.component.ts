import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { SearchService } from '../core/search.service';
import { ApiResponse } from '../types/api-response.type';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  resultData: ApiResponse;
  searchHistory: string[] = [];

  private reactionsTrigger$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  imageUrl = `https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg`;
  query: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.getCachedData();
    this.getSearchHistory();
    this.reactionsTrigger$
      .pipe(
        switchMap(() => this.searchService.fetchImages(this.query)),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        if (data && data.stat.toLowerCase() === 'ok') {
          this.searchService.setHistory(this.query);
          this.setCachedData(data);
          this.resultData = data;
          console.log(this.resultData);
        }
      });
  }

  getSearchHistory = () => {
    this.searchService.getHistory().subscribe(data => this.searchHistory = data);
  }

  getCachedData = () => {
    const cachedData = JSON.parse(localStorage.getItem('data'));
    if (cachedData && cachedData.stat.toLowerCase() === 'ok') {
      this.resultData = cachedData;
    }
  }

  setCachedData = (data: ApiResponse) => {
    localStorage.setItem('data', JSON.stringify(data));
  }

  queryChange = (event) => {
    this.query = event;
    this.reactionsTrigger$.next();
  }

  removeHistory = (index: number) => {
    this.searchService.removeHistory(index);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
