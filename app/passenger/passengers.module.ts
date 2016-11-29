import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* PassengersComponent */ 
import { PassengersComponent } from './passengers.component';
import { PassengerComponent } from './passenger.component';
import { PassengerDetailComponent } from './passenger-detail.component';
import { PassengerService  } from './passenger.service';



@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ PassengersComponent,PassengerComponent,PassengerDetailComponent ],
    providers: [PassengerService]
})
export class PassengersModule { }