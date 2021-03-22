import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from './HttpService';
import {User} from './User';
import {ChildComponent} from './Child/child.component';


@Component({
  selector: 'app-observable',
  templateUrl: 'observable.component.html',
  styleUrls: [
    'observable.component.less'
  ]
})
export class ObservableComponent implements OnInit {
  style = true;
  @ViewChild(ChildComponent)
  childComponent: ChildComponent;
  users: User[];

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getUsers().subscribe(data => this.users = data);
  }

  in(): void {
    this.childComponent.increment();
  }

  de(): void {
    this.childComponent.decrement();
  }
}
