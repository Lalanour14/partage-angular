import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Object} from './entities';
import { environment } from 'src/environements/environment';
@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  
 constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Object[]>(environment.serverUrl+'/api/object');
  }
  add(object:Object) {
    return this.http.post<Object>(environment.serverUrl+'/api/object', object);
  }
  delete(object:Object) {
    return this.http.delete<void>(environment.serverUrl+'/api/object/'+object._id);
  }
}
