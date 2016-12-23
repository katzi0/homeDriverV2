import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


/* PassengersComponent */ 
import { PassengersComponent } from './passengers.component';
import { PassengerComponent } from './passenger.component';
import { PassengerDetailComponent } from './passenger-detail.component';
import { PassengerService  } from './passenger.service';
import { PassengersComponentdule  } from './passengers.routing.module';




@NgModule({
    imports: [ BrowserModule, FormsModule, PassengersComponentdule, HttpModule ],
    declarations: [ PassengersComponent,PassengerComponent,PassengerDetailComponent ],
    providers: [PassengerService],
    exports: [PassengersComponent, PassengerComponent]
})
export class PassengersModule { }