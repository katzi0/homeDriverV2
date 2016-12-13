import { Pipe, PipeTransform } from '@angular/core';
import { DriveComponent } from '../drive/drive.component'; 

@Pipe({
    name: 'CalendarRoundHours',
     pure: false
})

export class CalendarRoundHoursPipe implements PipeTransform {
    transform(driveHours:  [{hour : string, drive: DriveComponent}]){
         
         if(driveHours == null){
            return driveHours;
         }
        //  return driveHours.filter(driveHour => driveHour.hour.substr)
         else {
             if(driveHours.length == 1){
                 return driveHours;
             }
             else{
                 return driveHours.filter(driveHour => driveHour.hour.substr(3,6) == "00" || driveHour.hour.substr(3,6) == "30")
             }
         }  
    }
}