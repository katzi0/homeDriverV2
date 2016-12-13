/**
 * Created by Shai on 9/2/2016.
 */
import { Component, OnInit } from '@angular/core';
import { DriveService } from "../drive/drive.service";
import { DriveComponent } from "../drive/drive.component";
import { CalendarHoursPerDayComponent } from "./calendar-hours-per-day.component";
import { CalendarRoundHoursPipe } from './calendar-round-hours.pipe';
import { DriveHour } from './drivehour';



import { DriverService } from "../drivers/driver.service"; 

const DRIVETIME: any[] = [
  {time: '06:00'},
  {time: '06:30'},
  {time: '06:45'},
  {time: '08:00'},
  {time: '11:00'}
]

@Component({
    //moduleId: module.id,
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']
})
export class CalendarComponent implements OnInit {
  driveTimes;
  drivers : any[] = [];
  drivesFromDb : any[] = [];
  driveHours: DriveHour[] = [];// = [{hour: null ,drive: null}]; //TODO:1.put data inside arr before ngOnInit, 2.delete first object in arr
  constructor( private _driveService: DriveService, private _driversService: DriverService, 
                private _calendarHoursPerDay : CalendarHoursPerDayComponent) { }

    ngOnInit() {
      this.driveTimes = DRIVETIME;
      this.getDrivesFromDb();
      //get passengers serivce...
      this.getDriversFromDb();
    }

  showDrivesAndHours(){
    console.log(this.drivesFromDb);
    this.getDriveHoursPerDay();
  }

  //get rides from db , TODO: change drive to ride 

 //All drives 
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

//drives by specfic driver
   getDrivesFromDbByDriver(){
    this._driveService.getDrivesByDriver_RXObsverable()
      .subscribe(
        //on succeed
        ( drives ) =>  this.drivesFromDb = drives ,
        //on error
        ( err ) => {console.log(err);},
        //on complete
        (  ) => this.getDriveHoursPerDay()
      );
  }

  //get drivers from db
  getDriversFromDb(){
    this._driversService.getCostumers()
    .subscribe(
      (drivers) => this.drivers = drivers,
      ( err ) => {console.log(err);},
    )
  }

  getDriveHoursPerDay() {
      // i =1 for remove first drive hour conatins null values
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
