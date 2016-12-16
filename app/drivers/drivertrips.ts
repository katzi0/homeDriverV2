import { Injectable } from '@angular/core';
//import { DriveComponent } from "../drive/drive.component";
import { DriveHour } from '../calendar/drivehour';
import { DriverComponent } from './driver.component'; 


@Injectable()
export class DriverTrips { 
  constructor(
    public drivers : DriverComponent[],
    public trips: DriveHour[]
    ) { }    
}
