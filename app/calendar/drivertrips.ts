import { Injectable } from '@angular/core';
//import { DriveComponent } from "../drive/drive.component";
import { DriveHour } from './drivehour';
import { DriverComponent } from '../drivers/driver.component'; 


@Injectable()
export class DriverTrips { 
  constructor(
    public drivers: DriverComponent[], //todo: import drivers module and change type to driverComponent
    public trips: DriveHour[]
    ) { }    
}
