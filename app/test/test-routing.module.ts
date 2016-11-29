import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { testComponent } from './test.component';


const routes: Routes = [
   // { path: '',redirectTo: 'test', pathMatch: 'full' },
    { path: '', component: testComponent }
]

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'test', component: testComponent }])],
  exports: [RouterModule],
})
export class TestRoutingModule { }

