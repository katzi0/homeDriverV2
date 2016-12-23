import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarHoursPerDayComponent }   from './calendar-hours-per-day.component';

@NgModule({
    imports: [BrowserModule],
    exports: [CalendarHoursPerDayComponent],
    declarations: [CalendarHoursPerDayComponent],
    providers: [],
})
export class CalendarHoursPerDayModule { }
