import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users';

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

  showAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlRoot + "/users/ShowAllUsers");
  }

  getUserById(id : number): Observable<User> {
    return this.http.get<User>(this.urlRoot + "/users/GetUserById/" + id);
  }

  getUserByName(searchTerm : string) : Observable <User[]>{
    return this.http.get<User[]>(this.urlRoot + "/users/GetUserByName" + searchTerm);
  }
  
  createUser(u : User) : Observable<User>{
    return this.http.put<User>(this.urlRoot + "/users/CreateNewUser", u, this.requestOptions);
  }

  updateUser(id : number, u : User) : Observable <User>{
    return this.http.post<User>(this.urlRoot + "/users/UpdateUser/" + id, u, this.requestOptions);
  }

  deleteUser(id : number) : Observable <User> {
    return this.http.delete<User>(this.urlRoot + "/users/DeleteUser/" + id, this.requestOptions);
  }

}
