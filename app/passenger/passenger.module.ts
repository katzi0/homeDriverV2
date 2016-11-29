import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PassengerComponent } from './passenger.component';
import { PassengerDetailModule } from'./passenger-detail.module';
import { PassengersModule } from './passengers.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [ BrowserModule,FormsModule],//, PassengerDetailModule],// PassengersModule ],
    declarations: [ PassengerComponent ],
    exports:    [ PassengerComponent ]
})
export class PassengerModule { }