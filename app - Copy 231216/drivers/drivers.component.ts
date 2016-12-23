import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Rx';

import { DriverComponent } from './driver.component';

import { DriverService } from './driver.service';

import { DriverDetailComponent } from './driver-detail.component';
//import { CostumerSelected } from './costumer-selected';

@Component({
    //moduleId : module.id,
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.css'],
    //directives: [CostumerComponent,CostumeDetailComponent],
    //providers: [CostumerService,CostumerComponent]
})
export class DriversComponent implements OnInit {
    drivers: DriverComponent[];
    //drivers: Observable<any>;
    //drivers: Promise<any>;
    // drivers: Observable<any[]>;

    name = 'user';
    selectedCostumer;
  constructor(private _costumerService : DriverService) {
    }


    ngOnInit() {
    //Rx observale version
      this._costumerService.getCostumers_RXObsverable()
        .subscribe(
          //it worked
        ( costumers ) => this.drivers = costumers,
          //error
        (err) => {console.log(err);}
      );


    }

  addDrivers(name){

    this._costumerService.addCostumer_RXObsverable(name)
      .subscribe(
        //it worked
        ( costumers ) => {console.log(costumers)},
        //error
        (err) => {console.log(err);}
      );
  }

  onSelect(costumer){
    this. selectedCostumer = costumer;

  }
//straight up promise to array
//   this._CostumerService.getCostumers()
// .then((drivers) => this.drivers = drivers)
// .catch((err) => {
//   console.log(err);
//
// });
// Rx observale version
//   this._CostumerService.getCostumers_RXObsverable()
// .subscribe(
//   //it worked
// ( drivers ) => this.drivers = drivers,
//   //error
// (err) => {console.log(err);}
// );

//Straight up promise to array


  //Promise version
  // this.drivers = this._CostumerService.getCostumers()
  // .catch((err) => {
  //   console.log(err);
  //
  // });

  //RX obseverable version
    //   this.drivers = this._CostumerService.getCostumers()
    //     .catch((err) => {
    //       console.log(err);
    //       return Observable.of(true);
    //     });
    // }
}

