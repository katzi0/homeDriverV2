import { Injectable } from '@angular/core';
import { DriveComponent } from "../drive/drive.component";

@Injectable()
export class DriveHour { 
  constructor(
    public hour : string,
    public drive: DriveComponent
    ) { }    
}


