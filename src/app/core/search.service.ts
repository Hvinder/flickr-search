import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../types/api-response.type';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  key = 'f590a168e4763ca789f4697fdf98bcdd';
  secret = '';
  endpoint = 'https://www.flickr.com/services/rest/?method=';
  searchUrl = 'flickr.photos.search';

  searchHistory: string[] = [];

  constructor(private http: HttpClient) {
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
  }

  fetchImages(query: string): Observable<ApiResponse> {
    const url = `${this.endpoint}${this.searchUrl}&format=json&nojsoncallback=1&api_key=${this.key}&text=${query}`;
    return this.http.get<ApiResponse>(url);
  }

  setHistory = (query: string) => {
    this.searchHistory.push(query);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

  getHistory(): Observable<string[]> {
    return of(this.searchHistory);
  }

  removeHistory = (index: number) => {
    this.searchHistory.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }
}
