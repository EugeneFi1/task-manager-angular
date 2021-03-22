import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {TasksComponent} from './tasks/tasks.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
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
