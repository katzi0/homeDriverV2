import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DriverDetailComponent } from './driver-detail.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ DriverDetailComponent ],
    exports: [DriverDetailComponent]
})
export class DriverDetailModule { }