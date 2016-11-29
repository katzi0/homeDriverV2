import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* DriveComponent */
import { DriveComponent }   from './drive.component';
import { DriveDirection }   from './drive-direction.component';
import { DriveTime }   from './drive-time.component';

import { DriveService } from './drive.service';

/* passengers import */
import { PassengersModule } from '../passenger/passengers.module';

/* drivers import */
import { DriversModule } from '../drivers/drivers.module';

@NgModule({
    imports: [BrowserModule,FormsModule,PassengersModule, DriversModule],
    //exports: [DriveComponent],
    declarations: [DriveComponent],
    //declarations: [DriveDirection, DriveTime, DriveComponent],
    providers: [DriveService],
})
export class DriveModule { }
