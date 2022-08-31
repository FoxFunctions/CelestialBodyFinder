import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { elevate } from './elevation';

@Injectable({
  providedIn: 'root'
})
export class ElevationService {
  latitude : number = 0;
  longitude : number = 0;

  constructor(private http : HttpClient) { }

  getElevation() : Observable<elevate>{
    return this.http.get<elevate>("https://api.open-elevation.com/api/v1/lookup?locations=" + this.latitude + "," + this.longitude);
  }
}
