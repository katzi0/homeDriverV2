import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PassengerDetailComponent } from './passenger-detail.component';
//import { PassengerModule } from './passenger.module';
///import { PassengerModule } from './passenger.module';

@NgModule({
    imports: [ BrowserModule, FormsModule],//, PassengerModule],//, PassengerModule ],
    declarations: [ PassengerDetailComponent ],
    exports:    [ PassengerDetailComponent ]
})
export class PassengerDetailModule { }


