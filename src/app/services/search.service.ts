import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private dataUrl = 'assets/addresses.json';

  constructor(private http: HttpClient) {}

  getAddresses(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
