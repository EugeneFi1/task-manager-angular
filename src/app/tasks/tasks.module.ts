import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    TasksComponent
  ],
  declarations: [
    TasksComponent,
    AddTaskComponent
  ]
})
export class TasksModule {}
