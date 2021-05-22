import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent {
  @Output()
  public newTask = new EventEmitter<string>();
  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      task: new FormControl('')
    });
  }

  public addNewTask(customerData: any): void {
      this.newTask.emit(customerData.task);
  }
}
