import { Injectable } from '@angular/core';
//import { DriveComponent } from "../drive/drive.component";
import { DriveHour } from './drivehour';
import { DriverComponent } from '../drivers/driver.component';
import { DriversComponent } from '../drivers/drivers.component'; 
 


@Injectable()
export class DriverTrips { 
  constructor(
    public drivers: DriversComponent, //todo: import drivers module and change type to driverComponent
    public tripHour: string[],
    public trips: DriveHour[]
    ) { }    
}
