import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* DriveComponent */
import { DriveComponent }   from './drive.component';
import { DriveDirection }   from './drive-direction.component';
import { DriveTime }   from './drive-time.component';
import { DriveService } from './drive.service';
import { DriveRoutingModule } from './drive.routing.module';

/* passengers import */
import { PassengersModule } from '../passenger/passengers.module';

/* drivers import */
import { DriversModule } from '../drivers/drivers.module';

@NgModule({
    imports: [BrowserModule,FormsModule,PassengersModule, DriversModule, DriveRoutingModule, HttpModule],
    //exports: [DriveComponent],
    declarations: [DriveComponent],
    //declarations: [DriveDirection, DriveTime, DriveComponent],
    providers: [DriveService],
    exports: [DriveComponent]
})
export class DriveModule { }
