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
  {hour: '06:00'},
  {hour: '06:30'},
  {hour: '06:45'},
  {hour: '08:00'},
  {hour: '11:00'}
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
   // this.getDriveHoursPerDay();
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
        (  ) => this.saveTripsInDriverTrips()
        //(  ) => this.getDriveHoursPerDay()
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
        (  ) => this.saveTripsInDriverTrips()//this.getDriveHoursPerDay()
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
    for(let i=0; i < this.drivers.length; i++){
      this.driverTrips.push({drivers:this.drivers[i],tripHour: [], trips: []})
    }
   }

  getDriveHoursPerDay() {
      for (let j = 0; j < this.driverTrips.length; j++){
       for ( let i = 0; i < this._calendarHoursPerDay.driveHours.length; i++ ){
          //array for display hours per day
          this.driveHours.push(this._calendarHoursPerDay.driveHours[i].driveHourToPush);
          
          if(this.driverTrips[j].tripHour.indexOf(this._calendarHoursPerDay.driveHours[i].driveHourToPush) == -1)
          {
            this.driverTrips[j].trips.push({
                hour: this._calendarHoursPerDay.driveHours[i].driveHourToPush,
                drive: null
            })
            this.driverTrips[j].tripHour.push(this._calendarHoursPerDay.driveHours[i].driveHourToPush)
          }
       }
    }
    //sort the arrays
    for (let j = 0; j < this.driverTrips.length; j++){
      this.driverTrips[j].tripHour.sort();
      this.driverTrips[j].trips.sort(function(a,b){
          if (parseInt(a.hour.split(":")[0]) - parseInt(b.hour.split(":")[0]) === 0) {
            return parseInt(a.hour.split(":")[1]) - parseInt(b.hour.split(":")[1]);
          } else {
            return parseInt(a.hour.split(":")[0]) - parseInt(b.hour.split(":")[0]);
          }
         });
    }
  }

  saveTripsInDriverTrips() {
    //sort drivesFromDb before save in driverTrips
    this.drivesFromDb.sort(function (a, b) {
      if (parseInt(a.hour.split(":")[0]) - parseInt(b.hour.split(":")[0]) === 0) {
        return parseInt(a.hour.split(":")[1]) - parseInt(b.hour.split(":")[1]);
      } else {
        return parseInt(a.hour.split(":")[0]) - parseInt(b.hour.split(":")[0]);
      }
    });

    for (let i = 0; i < this.driverTrips.length; i++) {
      for (let j = 0; j < this.drivesFromDb.length; j++) {
        if (this.driverTrips[i].drivers.name == this.drivesFromDb[j].driver) {
          //this.driverTrips[i].trips.push(this.drivesFromDb[j]);
          this.driverTrips[i].trips.push({hour:this.drivesFromDb[j].hour,drive:this.drivesFromDb[j]});
          this.driverTrips[i].tripHour.push(this.drivesFromDb[j].hour);
        }
      }
    }
    this.getDriveHoursPerDay();
  }
  
  deleteDrive(currentDriverTrips: DriverTrips,driveToDelete: DriveHour){
    let duration = driveToDelete.drive.duration; //change driveduration to duration in model
    let driveDurationIn5minSectors = duration/5;
    let hour: string;
    let tripHour:DriveHour[]=[];
    //getting current trip index
    let index:number = currentDriverTrips.trips.findIndex(trip => trip.hour == driveToDelete.hour)

    for (let durationSector = 0; durationSector <= driveDurationIn5minSectors; durationSector++){
      //delete from db
      this.deleteDriveFromDb(currentDriverTrips.trips[index + durationSector].drive._id);
      //delete from driverTrips object
      hour = currentDriverTrips.trips[index + durationSector].hour;
      tripHour.push({hour:hour,drive:null});
      currentDriverTrips.trips[index + durationSector] = tripHour[durationSector];
      
    }
  }
  // getDriveDurationInListItem(durationInMinutes){
  //   let numOfLiToBind:number = durationInMinutes/5;
  //   return numOfLiToBind;
  // }
  //
  // showLiContent(driveHour){
  //   console.log(driveHour);
  // }
    deleteDriveFromDb(driveID){
    this._driveService.deleteDrive_RXObservable(driveID)
      .subscribe(
        //it worked
        ( drive ) => {console.log(drive)},
        //error
        (err) => {console.log(err);}
      );
  }
}
