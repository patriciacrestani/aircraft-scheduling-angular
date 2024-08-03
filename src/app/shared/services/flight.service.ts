import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFlights(): Observable<any[]> {
    return this.httpClient.get<any[]>("https://recruiting-assessment.alphasights.com/api/flights");
  }
}
