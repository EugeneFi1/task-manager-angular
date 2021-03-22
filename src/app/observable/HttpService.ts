import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './User';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get('assets/users.json').pipe(map(data => {
      const usersList = data['userList'];
      return usersList.map((user => {
        return {name: user.userName, age: user.userAge};
      }));
    }));
  }
}
