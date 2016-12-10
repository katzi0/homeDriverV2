import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


/* CalendarComponent */
import { CalendarComponent }   from './calendar.component';
import { CalendarHoursPerDayComponent } from './calendar-hours-per-day.component';
import { CalendarRoutingModule } from './calendar.routing.module';

/* drive import */
import { DriveModule } from '../drive/drive.module';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, DriveModule, CalendarRoutingModule],//[CalendarHoursPerDayModule],
    declarations: [CalendarComponent],
    providers: [CalendarHoursPerDayComponent],
    exports: [CalendarComponent]
})
export class CalendarModule { }
