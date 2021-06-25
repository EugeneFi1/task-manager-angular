import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './modules/tasks/tasks.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {

}
