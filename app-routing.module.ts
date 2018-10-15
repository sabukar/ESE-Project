import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JoblistingComponent} from './joblisting/joblisting.component';

const routes: Routes = [
  {path: 'joblisting', component: JoblistingComponent},
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
