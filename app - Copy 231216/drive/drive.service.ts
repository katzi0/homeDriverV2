import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";

const URL_DRIVES = 'http://localhost:3005/drive';

@Injectable()
  export class DriveService {
  constructor(private _http : Http) { }

  getDrives_RXObsverable() {
    return this._http.get(URL_DRIVES)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
  }

  //30.11
  //GET DRIVE BY DRIVER (user hard coded, change to dynamic)
   getDrivesByDriver_RXObsverable(driver) {
    return this._http.get('http://localhost:3005/driver/' + driver)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
      //test
  }



  addDrive_RXObsverable(driver, passengers, direction, hour, duration, date) { //TODO:add duration regarding driving direction

    if(driver != undefined){
      console.log(driver.name);
      
    }
    else{
      driver.name = "no driver added to current drive yet";
      console.log(driver.name);
    }
    //let duration: number = 45; //TODO:add duration regarding driving direction

    console.log(passengers);
    console.log(direction);
    console.log(hour);
    console.log(duration);
    console.log("date:"+date)
    let jsonTest= {driver: driver.name, passengers: passengers, direction: direction, hour: hour, duration: duration, date:date};

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    let body = JSON.stringify(jsonTest);
    //console.log(jsonTest);
    return this._http.post(URL_DRIVES, body, options)
      .map((response: Response) => response.json())

      .catch(this._handlerError);
    //this.addDriveToDB(driver, passengers, direction, time,duration);
   // this.addDriveDuration(time, duration);
  }

  addDriveToDB(driver, passengers, direction, hour, duration){
    console.log(passengers);
    console.log(direction);
    console.log(hour);
    console.log(duration);
    let jsonTest= {driver: driver.name, passengers: passengers, direction: direction, hour: hour, duration: duration};

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    let body = JSON.stringify(jsonTest);
    //console.log(jsonTest);
    return this._http.post(URL_DRIVES, body, options)
      .map((response: Response) => response.json())

      .catch(this._handlerError);
  }

  addDriveDuration(hour, duration){
    let driveDurationIn5minSectors = duration/5;
    for (let durationSector = 0; durationSector > driveDurationIn5minSectors; durationSector++){
      this.add5minSectorsToDuration(hour, durationSector);
    }
  }

  add5minSectorsToDuration(hour, durationSector){
    let timeStr : String = hour;
    let hourStr : String = hour.substr(0,2);
    let minutesStr : String = hour.substr(3,5);
    console.log(hourStr,minutesStr);
  }

  deleteDrive_RXObservable(driveID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});

    return this._http.delete('http://localhost:3005/drive/' + driveID, options)
      .map((response: Response) => response.json())
      .do(value => console.log(value))
      .catch(this._handlerError);
  }

  getDrives() {
    return this._http.get(URL_DRIVES)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
  }

  _handlerError(err: any){
    console.log(err);

    return Observable.throw(err);
  }
}

