import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverComponent } from './driver.component';
import { DriverDetailModule  } from './driver-detail.module';
import { DriverTrips } from './drivertrips';
//import { DriverTripsComponent } from './driver-trips.Component'; 

@NgModule({
    imports: [ BrowserModule, DriverDetailModule ],
    declarations: [ DriverComponent],// DriverTripsComponent ],
    exports: [ DriverComponent ],
    providers: [DriverTrips]
})
export class DriverModule { }