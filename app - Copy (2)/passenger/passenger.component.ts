/**
 * Created by Shai on 8/18/2016.
 */
import { Component, OnInit, Input } from '@angular/core';
import { PassengerService } from './passenger.service';


@Component({
    //moduleId: module.id,
    selector: 'app-passenger',
    templateUrl: 'passenger.component.html',
    styleUrls: ['passenger.component.css'],
    providers: [PassengerService]
})
export class PassengerComponent implements OnInit {

  @Input() passenger: {_id: number, name:  string};
  constructor(private _passengerService: PassengerService) { }

    ngOnInit() { }
  //function execute from passengers component insted of single component

  deletePassenger(){
    alert(this.passenger._id);
    this._passengerService.deleteUser_RXObservable(this.passenger._id)
      .subscribe(
        (response) => {console.log(response)},
        (err) => {console.log(err);}
      )
  }
}
