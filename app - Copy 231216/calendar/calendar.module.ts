import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


/* CalendarComponent */
import { CalendarComponent }   from './calendar.component';
import { CalendarHoursPerDayComponent } from './calendar-hours-per-day.component';
import { CalendarRoutingModule } from './calendar.routing.module';
import { CalendarRoundHoursPipe } from './calendar-round-hours.pipe';

import { DriveHour } from './drivehour';
import { DriverTrips } from './drivertrips';


/* drive import */
import { DriveModule } from '../drive/drive.module';
/* driver import */
import { DriversModule } from '../drivers/drivers.module';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, DriveModule, DriversModule, CalendarRoutingModule],//[CalendarHoursPerDayModule],
    declarations: [CalendarComponent, CalendarRoundHoursPipe],
    providers: [CalendarHoursPerDayComponent,DriveHour,DriverTrips],
    exports: [CalendarComponent]
})
export class CalendarModule { }
