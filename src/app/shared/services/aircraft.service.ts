import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getAircrafts(): Observable<any[]> {
    return this.httpClient.get<any[]>("https://recruiting-assessment.alphasights.com/api/aircrafts");
  }
}
