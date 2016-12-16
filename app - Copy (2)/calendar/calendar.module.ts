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


/* drive import */
import { DriveModule } from '../drive/drive.module';
/* driver import */
import { DriverModule } from '../drivers/driver.module';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, DriveModule, DriverModule, CalendarRoutingModule],//[CalendarHoursPerDayModule],
    declarations: [CalendarComponent, CalendarRoundHoursPipe],
    providers: [CalendarHoursPerDayComponent,DriveHour],
    exports: [CalendarComponent]
})
export class CalendarModule { }
