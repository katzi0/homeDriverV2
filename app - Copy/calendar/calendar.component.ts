/**
 * Created by Shai on 9/2/2016.
 */
import { Component, OnInit } from '@angular/core';
import { DriveService } from "../drive/drive.service";
import { DriveComponent } from "../drive/drive.component";
import { CalendarHoursPerDayComponent } from "./calendar-hours-per-day.component";

import { DriverService } from "../drivers/driver.service"; 
// import {DriveComponent} from "../drive/drive.component";
// import { DriveService } from '../drive/drive.service';
// import { DriveComponent } from '../drive/drive.component';
// import { CalendarHoursPerDay } from "./calendar-hours-per-day.component";


// const CALENDAR_HOURS_PER_DAY: CalendarHoursPerDay [] = [
//
// ]

@Component({
    //moduleId: module.id,
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css'],
   // providers: [DriveService, CalendarHoursPerDay],
   // directives: [DriveComponent]
})
export class CalendarComponent implements OnInit {

  drivers : any[] = [];
  drivesFromDb : any[] = [];
  driveHours: [{hour : string, drive: DriveComponent}] = [{hour: null ,drive: null}]; //TODO: delete first object in arr
  constructor( private _driveService: DriveService, private _driversService: DriverService, private _calendarHoursPerDay : CalendarHoursPerDayComponent) { }

    ngOnInit() {
      this.getDrivesFromDb();
    }

  showDrivesAndHours(){
    console.log(this.drivesFromDb);
    this.getDriveHoursPerDay();
  }

  //get drivers from db
//   getDriversFromDb(){
//     this._driversService.getCostumers_RXObsverable()
//     .subscribe(
//       ( drivers ) => this.drivers = drivers,
//       ( err ) => {console.log(err);},
//     )  
// }

  //get rides from db , TODO: change drive to ride 
  getDrivesFromDb(){
    this._driveService.getDrives_RXObsverable()
      .subscribe(
        //on succeed
        ( drives ) =>  this.drivesFromDb = drives ,
        //on error
        ( err ) => {console.log(err);},
        //on complete
        (  ) => this.getDriveHoursPerDay()
      );
  }

  getDriveHoursPerDay() {
       for ( let i = 0; i < this._calendarHoursPerDay.driveHours.length; i++ ){
          this.driveHours.push({
            hour: this._calendarHoursPerDay.driveHours[i].driveHourToPush,
            drive: this.drivesFromDb.find(drive => drive.time === this._calendarHoursPerDay.driveHours[i].driveHourToPush)});
       }
    }

  // getDriveDurationInListItem(durationInMinutes){
  //   let numOfLiToBind:number = durationInMinutes/5;
  //   return numOfLiToBind;
  // }
  //
  showLiContent(driveHour){
    console.log(driveHour);
  }
}
