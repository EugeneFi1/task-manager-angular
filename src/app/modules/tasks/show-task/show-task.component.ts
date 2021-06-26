import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../../services/tasks.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.less']
})
export class ShowTaskComponent implements OnInit{

  public tasks: Observable<string[]>;
  constructor(private service: TasksService) {
  }

  ngOnInit(): void {
    this.tasks = this.service.loadTasks();
  }
}
