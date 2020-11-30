import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  key = 'f590a168e4763ca789f4697fdf98bcdd';
  secret = '';
  endpoint = 'https://www.flickr.com/services/rest/?method=';
  searchUrl = 'flickr.photos.search';

  constructor(private http: HttpClient) {}

  fetchImages(query: string): Observable<any> {
    const url = `${this.endpoint}${this.searchUrl}&format=json&api_key=${this.key}&text=${query}`;
    return this.http.get(url);
  }
}
