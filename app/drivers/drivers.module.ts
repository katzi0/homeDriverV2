import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


/*HTTP */
//import { Http, Response, Headers, RequestOptions } from '@angular/http';

/* DriversComponent */
import { DriversComponent } from './drivers.component';
import { DriverComponent } from './driver.component';
import { DriverDetailComponent } from './driver-detail.component';
import { DriverService} from './driver.service';
import { DriversRoutingComponent } from './drivers.routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, DriversRoutingComponent,HttpModule],//, Http, Response, Headers, RequestOptions  ],
    declarations: [ DriversComponent, DriverComponent, DriverDetailComponent ],
    //exports: [ DriversComponent ]
    providers: [DriverService],
    exports: [DriversComponent]
})
export class DriversModule { } 