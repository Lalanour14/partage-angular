import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environements/environment';
import { User } from './entities';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<User[]>(environment.serverUrl+'/api/user');
  }
  add(user:User) {
    return this.http.post<User>(environment.serverUrl+'/api/user', user);
  }
  delete(user:User) {
    return this.http.delete<void>(environment.serverUrl+'/api/user/'+user._id);
  }

}
