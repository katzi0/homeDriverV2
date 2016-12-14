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
   getDrivesByDriver_RXObsverable() {
    return this._http.get('http://localhost:3005/driver/user')
      .map((response: Response) => response.json())
      .catch(this._handlerError);
      //test
  }



  addDrive_RXObsverable(driver, passengers, direction, time, duration, date) { //TODO:add duration regarding driving direction

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
    console.log(time);
    console.log(duration);
    console.log("date:"+date)
    let jsonTest= {driver: driver.name, passengers: passengers, direction: direction, time: time, duration: duration, date:date};

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

  addDriveToDB(driver, passengers, direction, time, duration){
    console.log(passengers);
    console.log(direction);
    console.log(time);
    console.log(duration);
    let jsonTest= {driver: driver.name, passengers: passengers, direction: direction, time: time, duration: duration};

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    let body = JSON.stringify(jsonTest);
    //console.log(jsonTest);
    return this._http.post(URL_DRIVES, body, options)
      .map((response: Response) => response.json())

      .catch(this._handlerError);
  }

  addDriveDuration(time, duration){
    let driveDurationIn5minSectors = duration/5;
    for (let durationSector = 0; durationSector > driveDurationIn5minSectors; durationSector++){
      this.add5minSectorsToDuration(time, durationSector);
    }
  }

  add5minSectorsToDuration(time, durationSector){
    let timeStr : String = time;
    let hourStr : String = time.substr(0,2);
    let minutesStr : String = time.substr(3,5);
    console.log(hourStr,minutesStr);
  }

  deleteDrive_RXObservable(userID){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});

    return this._http.delete('http://localhost:3005/drive' + userID, options)
      .map((response: Response) => response.json())

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

