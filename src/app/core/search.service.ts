import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../types/api-response.type';
import { Info } from '../types/info.type';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  key = 'f590a168e4763ca789f4697fdf98bcdd';
  secret = '';
  endpoint = 'https://www.flickr.com/services/rest/?method=';
  searchUrl = 'flickr.photos.search';
  infoUrl = 'flickr.photos.getInfo';
  commentsUrl = 'flickr.photos.comments.getList';
  searchHistory: string[] = [];

  constructor(private http: HttpClient) {
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  fetchImages(query: string): Observable<ApiResponse> {
    const url = `${this.endpoint}${this.searchUrl}&format=json&nojsoncallback=1&api_key=${this.key}&text=${query}&sort=relevance`;
    return this.http.get<ApiResponse>(url);
  }

  fetchComments(id: string): Observable<any> {
    const url = `${this.endpoint}${this.commentsUrl}&format=json&nojsoncallback=1&api_key=${this.key}&photo_id=${id}`;
    return this.http.get<any>(url);
  }

  fetchInfo(id: string): Observable<Info> {
    const url = `${this.endpoint}${this.infoUrl}&format=json&nojsoncallback=1&api_key=${this.key}&photo_id=${id}`;
    return this.http.get<Info>(url);
  }

  setHistory = (query: string) => {
    this.searchHistory.push(query);
    // this.searchHistory = [... new Set(this.searchHistory)];
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
