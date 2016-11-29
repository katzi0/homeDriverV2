import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* app component */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

/* import modules */
import { DriversModule } from './drivers/drivers.module';
import { PassengersModule } from './passenger/passengers.module';
import { DriveModule } from './drive/drive.module';
import { CalendarModule } from './calendar/calendar.module';
import { testModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    //HttpModule,
    testModule,
    //PassengersModule,
    DriversModule,
    //DriveModule,
    //CalendarModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
