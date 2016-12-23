import { Component, OnInit } from '@angular/core';

//import { Observable } from 'rxjs/Rx';

import { PassengerComponent } from './passenger.component';

import { PassengerService } from './passenger.service';

import { PassengerDetailComponent } from './passenger-detail.component';
//import { CostumerSelected } from './costumer-selected';

@Component({
  //moduleId : module.id,
  selector: 'app-passengers',
  templateUrl: 'passengers.component.html',
  styleUrls: ['passengers.component.css'],
  providers: [PassengerService,PassengerComponent]
})
export class PassengersComponent implements OnInit {
  passengers: any[];
  //drivers: Observable<any>;
  //drivers: Promise<any>;
  // drivers: Observable<any[]>;

  name = 'user';
  selectedPassenger;
  constructor(private _passengerService : PassengerService) {
  }


  ngOnInit() {
    //Rx observale version
    this._passengerService.getPassengers_RXObsverable()
      .subscribe(
        //it worked
        ( passengers ) => this.passengers = passengers,
        //error
        (err) => {console.log(err);}
      );


  }

  addPassenger(name){

    this._passengerService.addPassenger_RXObsverable(name)
      .subscribe(
        //it worked
        ( passengers ) => {console.log(passengers)},
        //error
        (err) => {console.log(err);}
      );
  }

  onSelect(passenger){
    this. selectedPassenger = passenger;

  }

  deletePassenger(passenger){
    alert(passenger._id);
    this._passengerService.deleteUser_RXObservable(passenger._id)
      .subscribe(
        (response) => {console.log(response)},
        (err) => {console.log(err);}
      )
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

