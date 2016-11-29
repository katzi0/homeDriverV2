import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverComponent } from './driver.component';
import { DriverDetailModule  } from './driver-detail.module';

@NgModule({
    imports: [ BrowserModule, DriverDetailModule ],
    declarations: [ DriverComponent ],
    exports: [ DriverComponent ]
})
export class DriverModule { }