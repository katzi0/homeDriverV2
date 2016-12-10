import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* imports */
import { DriversModule } from './drivers/drivers.module';
import { PassengersModule } from './passenger/passengers.module';
import { DriveModule } from './drive/drive.module';
import { CalendarModule } from './calendar/calendar.module';

const routes: Routes = [
  { path: '', redirectTo:'test' , pathMatch:'full'},
  { 
    path: 'drivers', 
    component: DriversModule
  },
  { 
    path: 'passengers', 
    component:PassengersModule
  },
  { 
    path: 'drive', 
    component:DriveModule
  },
  { 
    path: 'calendar', 
    component:CalendarModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

