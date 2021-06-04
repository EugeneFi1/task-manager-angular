import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ShowTaskComponent} from './show-task/show-task.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    TasksComponent,
    ShowTaskComponent
  ],
  declarations: [
    TasksComponent,
    AddTaskComponent,
    ShowTaskComponent
  ]
})
export class TasksModule {}
