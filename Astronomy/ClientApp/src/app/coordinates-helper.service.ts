import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coords } from './coordinates';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesHelperService {
  userCity : string = "";
  userState : string = "";
  apiKey : string = "MmNmZTZlMGRjZjMyNDI2MDllNDIzZTU4ZWE4MzA3YTU6NzUyOWY3MjctYjRmMC00MzAzLThhYzAtOGFkYzIzYjJmOGM4";

  constructor(private http: HttpClient) { }
  GetCoords() : Observable<Coords>{
    return this.http.get<Coords>("https://api.myptv.com/geocoding/v1/locations/by-text?searchText=" +this.userCity + "%20" +this.userState + "&apiKey="+this.apiKey);
  }
}
