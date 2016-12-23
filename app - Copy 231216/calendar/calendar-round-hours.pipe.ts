import { Pipe, PipeTransform } from '@angular/core';
import { DriveComponent } from '../drive/drive.component';
import { DriveHour } from './drivehour';
import { DriverComponent } from '../drivers/driver.component'; 

@Pipe({
    name: 'CalendarRoundHours',
     pure: false
})

export class CalendarRoundHoursPipe implements PipeTransform {
    transform(driveHours:  DriveHour[], index: number){
         
         if(driveHours == null){
            return driveHours;
         }
        //  return driveHours.filter(driveHour => driveHour.hour.substr)
         else {
             if(driveHours.length == 1){
                 return driveHours;
             }
             else{
                 return driveHours.filter(driveHour => driveHour.hour.substr(3,6) == "00" || driveHour.hour.substr(3,6) == "30")    //&& driveHour.drive.driverInDrive == "user")
             }
         }  
    }
}