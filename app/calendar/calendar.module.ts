import { NgModule } from '@angular/core';

/* CalendarComponent */
import { CalendarComponent }   from './calendar.component';
import { CalendarHoursPerDayComponent } from './calendar-hours-per-day.component';

/* drive import */
import { DriveModule } from '../drive/drive.module';


@NgModule({
    imports: [DriveModule],//[CalendarHoursPerDayModule],
    declarations: [CalendarComponent, CalendarHoursPerDayComponent],
    providers: [],
})
export class CalendarModule { }
