import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {
  apiKey = 'GsCQ4vQMUozzN2Wy7Dq0C5QMs7cCWAVq';
  baseUrl = 'https://calendarific.com/api/v2';

  constructor(private http: HttpClient) { }
  getSources() {
    return this.http.get(`${this.baseUrl}/countries?api_key=${this.apiKey}`);  }
}
