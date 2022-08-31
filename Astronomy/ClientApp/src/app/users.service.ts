import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstroUser } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlRoot: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'); // We don't need headers or requestOption, but it makes console less bad.
  requestOptions: Object = {
    headers: this.headers,
    responseType: 'text'
  }; //this is to avoid a weird 200 error on put and post
  constructor(private http : HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.urlRoot = baseUrl;
  }

  showAllUsers(): Observable<AstroUser[]> {
    return this.http.get<AstroUser[]>(this.urlRoot + "/users/ShowAllUsers");
  }

  getUserById(id : number): Observable<AstroUser> {
    return this.http.get<AstroUser>(this.urlRoot + "users/GetUserById/" + id);
  }

  getUserByName(searchTerm : string) : Observable <AstroUser[]>{
    return this.http.get<AstroUser[]>(this.urlRoot + "/users/GetUserByName" + searchTerm);
  }
  
  createUser(u : AstroUser) : Observable<AstroUser>{
    return this.http.put<AstroUser>(this.urlRoot + "/users/CreateNewUser", u, this.requestOptions);
  }

  updateUser(id : number, u : AstroUser) : Observable <AstroUser>{
    return this.http.post<AstroUser>(this.urlRoot + "/users/UpdateUser/" + id, u, this.requestOptions);
  }

  deleteUser(id : number) : Observable <AstroUser> {
    return this.http.delete<AstroUser>(this.urlRoot + "/users/DeleteUser/" + id, this.requestOptions);
  }

}
