import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = 'http://localhost:9003/quest/get-string';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    // return this.http.get<any>(this.url);
    return this.http.request('GET', this.url, {responseType: 'text'});
  }
}
