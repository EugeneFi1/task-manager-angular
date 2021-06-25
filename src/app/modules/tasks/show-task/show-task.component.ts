import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../../services/tasks.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.less']
})
export class ShowTaskComponent implements OnInit{

  public tasks: string[];
  constructor(private service: TasksService) {
  }

  ngOnInit(): void {
    this.service.loadTasks().subscribe((data: string[]) => {
      this.tasks = data;
    });
  }
}
