import { Component, OnInit } from '@angular/core';
//import {DriveComponent} from "../drive/drive.component";


@Component({
  selector: 'calendar-hours-per-day',
  templateUrl: 'calendar-hours-per-day.component.html',
})


export class CalendarHoursPerDayComponent implements OnInit {
  hour: string;
  driveHours: any[] = [];

  constructor() {
    this.getDriveHoursPerDay();
  }


  ngOnInit() {
  //   this.getDriveHoursPerDay();
   }

  getDriveHoursPerDay() {
    let hour: number = 6;
    let sectorsPerDay: number = 14;
    let sectorsPerHour: number = 12;
    let driveHourToPush: string = "";

    for ( let i = 0; i < sectorsPerDay; i++ ){
      for ( let j = 0; j < sectorsPerHour; j++ ){
        //splits every hour to 12 parts (every 5 minutes)
        if(hour < 10){driveHourToPush = "0" + hour + ":" + (j === 0 ? "00" : j === 1 ? "05" : 5 * j)}

        else{driveHourToPush = hour + ":" + (j === 0 ? "00" : j === 1 ? "05" : 5*j)}

        this.driveHours.push({driveHourToPush});
        /*13.10*/
        /*  this.driveHours.push({hour:driveHourToPush,drive :null });*/
      }
      hour++;
    }
    console.log("driveHours in calendar hours per day component",this.driveHours);
  }
}

