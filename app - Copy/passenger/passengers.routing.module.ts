import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengersComponent } from './passengers.component';

const routes: Routes = [
  { path: 'passengers', component: PassengersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengersComponentdule { }

