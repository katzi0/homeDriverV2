/**
 * Created by Shai on 9/2/2016.
 */
import { Component, OnInit } from '@angular/core';
import { DriveService } from "../drive/drive.service";
import { DriveComponent } from "../drive/drive.component";
import { CalendarHoursPerDayComponent } from "./calendar-hours-per-day.component";
import { CalendarRoundHoursPipe } from './calendar-round-hours.pipe';
import { DriveHour } from './drivehour';
import { DriverTrips } from './drivertrips';

//import { DriverTrips } from "../drivers/drivertrips";




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
  tripToRemove: DriveHour;
  indexOfTripToRemove: number;
  currentDriver: string;
  driveTimes;
  drivers : any[] = [];
  drivesFromDb : any[] = [];
  driveHours: DriveHour[] = [];// = [{hour: null ,drive: null}]; //TODO:1.put data inside arr before ngOnInit, 2.delete first object in arr
  driverTrips: DriverTrips[] = [];
  constructor( private _driveService: DriveService, private _driversService: DriverService, 
                private _calendarHoursPerDay : CalendarHoursPerDayComponent) { }

    ngOnInit() {
      this.driveTimes = DRIVETIME;
      //16.12
      this.getDriversFromDb();
      // this.getDrivesFromDbByDriver();
      this.getDrivesFromDb();
      //get passengers serivce...
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
    this._driveService.getDrivesByDriver_RXObsverable("user")
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
      ( ) => this.saveDriversInDriverTrips()
    )
  }

   saveDriversInDriverTrips() {
  //   this.drivers.forEach(driver => {
  //   this.driverTrips.push({drivers:null,trips:null})})
    for(let i=0; i < this.drivers.length; i++){
      this.driverTrips.push({drivers:this.drivers[i], trips: []})
    }
   }

  getDriveHoursPerDay() {
      for (let j = 0; j < this.drivers.length; j++){
       for ( let i = 0; i < this._calendarHoursPerDay.driveHours.length; i++ ){
         //TODO: make arr of drivehours for each driver.
          this.driveHours.push({
          //this.driverTrips.push({
              hour: this._calendarHoursPerDay.driveHours[i].driveHourToPush,
              drive: this.drivesFromDb.find(drive => drive.time === this._calendarHoursPerDay.driveHours[i].driveHourToPush && drive.driver === this.drivers[j].name)});
        }
         this.saveTripsInDriverTrips();
      }
    }
       saveTripsInDriverTrips(){         
         for(let i = 0; i < this.driverTrips.length; i++){
            //this.currentDriver = this.driverTrips[i].drivers.name; //TODO:FIX THIS SHIT
            //TODO if driveHours[j].drive != undefined => check if driver name is the same. if not use hour only
            for( let j = 0; j < this.driveHours.length; j++){
              // if(this.driveHours[j].drive != null ){
              //   if( this.driveHours[j].drive.driver == this.driverTrips[i].drivers.name ){
              //     this.driverTrips[i].trips.push(this.driveHours[j])
              //   }
              //   // else{
              //   //   this.driverTrips[i].trips.push({
              //   //   hour:this.driveHours[j].hour,
              //   //   drive: null})
              //   // }
              // }
              // else{
                this.driverTrips[i].trips.push({
                  hour:this.driveHours[j].hour,
                  drive: null})
              }
            }
          for(let i = 0; i < this.driverTrips.length; i++){
            for( let j = 0; j < this.driveHours.length; j++){
              if(this.driveHours[j].drive != null ){
                if( this.driveHours[j].drive.driver == this.driverTrips[i].drivers.name ){
                 // this.driverTrips[i].trips.pop(this.driverTrips[i].trips.find)
                // overWriteCurrentHourObj = this.driverTrips[i].trips.find(currentTrip => currentTrip.hour == this.driveHours[j].hour);
                 
                  this.tripToRemove = this.driverTrips[i].trips.find(currentTrip => currentTrip.hour == this.driveHours[j].hour);
                  
                  this.indexOfTripToRemove = this.driverTrips[i].trips.indexOf(this.tripToRemove);
                  //remove trip
                  this.driverTrips[i].trips.splice(this.indexOfTripToRemove,1);
                  //push trip
                  this.driverTrips[i].trips.splice(this.indexOfTripToRemove,0,this.driveHours[j]);

               //   this.driverTrips[i].trips.push(this.driveHours[j])
                }
            }  
         }
      //}
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
