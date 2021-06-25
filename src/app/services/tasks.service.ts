import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Urls} from '../utils/urls';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  loadTasks(): Observable<string[]> {
    return this.http.get<string[]>(this.url + Urls.GET_TASKS);
  }
}
