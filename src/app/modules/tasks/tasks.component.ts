import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-tasks',
  template: `
    <app-add-task (newTask)="addTask($event)"></app-add-task>
    <div *ngIf="tasks.length > 0">
      <div *ngFor="let task of tasks">
        {{task}}
      </div>
    </div>
  `
})
export class TasksComponent {
  @Output()
  public tasksNumber = new EventEmitter();
  tasks: string[] = [];

  addTask(task: string): void {
    this.tasksNumber.emit();
    this.tasks.push(task);
  }
}
