import { Component, OnInit, Input } from '@angular/core';
import { DriverService } from "../drivers/driver.service";
import { PassengerService } from "../passenger/passenger.service";
import { PassengerComponent } from '../passenger/passenger.component';
import { DriverComponent } from "../drivers/driver.component";
import { DriveTime } from "./drive-time.component";
import { DriveDirection } from "./drive-direction.component";
import { DriveService  } from "./drive.service";


const DRIVEDIRECTION: DriveDirection[] = [
  {direction: 'Pardes-Hana'},
  {direction: 'Binyamina'},
  {direction: 'Hadera'}
]

const DRIVETIME: DriveTime[] = [
  {hour: '06:00'},
  {hour: '06:30'},
  {hour: '06:45'},
  {hour: '08:00'},
  {hour: '14:00'}
]

@Component({
    //moduleId: module.id,
    selector: 'app-drive',
    templateUrl: 'drive.component.html',
    //providers: [DriverService,PassengerService,DriverComponent,DriveService],
})


export class DriveComponent implements OnInit {
  @Input() _id: number; 
  passengers: any[];
  drivers: DriverComponent[];
  passengersInDrive: any[]=[];
  driverInDrive;//: CostumerComponent; //TODO: check how to initalize the component;
  directionInDrive;
  timeInDrive;
  //driveNumber: Number;
  selectedDriveEntity;
  driveTimes = DRIVETIME;
  driveDirections = DRIVEDIRECTION;
  driveDuration: number = 60;

  drivesFromDb: any[];
  dateMomentObj: any;
  date = Date;

  constructor(private _passengerService: PassengerService, private _costumerService: DriverService, private _driveService: DriveService) { }

    ngOnInit() {
      // showPassengers(){
        this._passengerService.getPassengers_RXObsverable()
          .subscribe(
            ( passengers ) => this.passengers = passengers,
            ( err ) => { console.log(err);}
          );

     // showDrivers(){
        this._costumerService.getCostumers_RXObsverable()
          .subscribe (
            ( drivers ) => this.drivers = drivers,
            ( err ) => {console.log(err);}
          );
     // getDrives() {
        this._driveService.getDrives_RXObsverable()
          .subscribe(
            ( drives ) =>  this.drivesFromDb = drives ,
            ( err ) => {console.log(err);}
          );
      //}
      console.log(this.passengers);
    }

    addPassengerToDrive(passenger){
    this.passengersInDrive.push(passenger.name);
    console.log(this.passengersInDrive," ", this.passengersInDrive.length);
  }

    addDriverToDrive(driver){
      if(this.driverInDrive == null) {
         console.log("no driver chosen yet, adding current selection");
         this.driverInDrive = driver;
         console.log("current driver:"," ",this.driverInDrive.name);
     }
       else {
          console.log("changing current driver:"," ",this.driverInDrive);
          this.driverInDrive = driver;
          console.log("new driver:"," ",this.driverInDrive);
       }

    }

    addDirectionToDrive(direction){
      this.directionInDrive = direction;
      console.log(direction,"added to the drive component");

    }

    addTimeToDrive(hour){
      this.timeInDrive = hour;
      console.log(hour,"added to the drive component");

    }

    addDriveToDrives(){
     console.log("date: "+this.date)
     //adding drive to db
      this._driveService.addDrive_RXObsverable(this.driverInDrive,this.passengersInDrive, this.directionInDrive, this.timeInDrive, this.driveDuration, this.date)
        .subscribe(
          ( drives ) => {console.log(drives)},
          (err) => {console.log(err);}
        )        
      this.addDriveDuration(this.timeInDrive, this.driveDuration);

    }

    addDriveDuration(time, duration){
      let driveDurationIn5minSectors = duration/5;
      let durationSector: number = 0;
      for (let i = 0; i < driveDurationIn5minSectors; i++){
        durationSector += 5;
        console.log(durationSector,driveDurationIn5minSectors);
        this.add5minSectorsToDuration(time, durationSector);
      }
    }
    addDriveDate(){
        this.date = this.dateMomentObj.momentObj.toDate(); 
    }

    add5minSectorsToDuration(time, durationSector){
      let timeStr : String;
      let nextLiTime : String = time + durationSector ;
      let hourStr : String = null;
      let minutesStr : String = null;
      let hourInt : number;
      let minutesInt: number;

      hourStr = nextLiTime.substr(0,2);
      minutesStr = nextLiTime.substr(3,6);

      hourInt = Number(hourStr);
      minutesInt = Number(minutesStr);

      if (minutesInt == 60) {
          minutesStr = "00";
          hourInt += 1;
      }
      else if(minutesInt < 10){
        minutesStr = "0" + minutesInt.toString();
      }
      else {
        minutesStr = minutesInt.toString();
      }
      if(hourInt <= 10) {
        hourStr ="0" + hourInt.toString();
      }
      else {
        hourStr = hourInt.toString();
      }

      nextLiTime = hourStr + ':' + minutesStr;
      console.log(nextLiTime);
      //15.12 
      //this._driveService.addDrive_RXObsverable("", "", "", nextLiTime, "",this.date)
        this._driveService.addDrive_RXObsverable(this.driverInDrive, "", "", nextLiTime, "",this.date)
        .subscribe(
          ( drives ) => {console.log(drives)},
          (err) => {console.log(err);}
        )
  }


    showDrive(){ //TODO: check if define passenger[] and   passengersInDrive as a PassengerComponent
    if(this.passengersInDrive.length > 0){
      console.log("passengers are: ");
      for (let i=0; i < this.passengersInDrive.length; i++ ){
        console.log(i," ",this.passengersInDrive[i].name);
      }
    }
    else{
      console.log("no passengers selected yet")
    }
    if(this.driverInDrive != null){
      console.log("driver:", this.driverInDrive);
    }
    else{
      console.log("no driver selected yet")
    }

  }

  deleteDrive(){
    this._driveService.deleteDrive_RXObservable(this._id)
      .subscribe(
        //it worked
        ( drive ) => {console.log(drive)},
        //error
        (err) => {console.log(err);}
      );
  }
}



