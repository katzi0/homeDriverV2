import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from './driver.service';



@Component({
    //moduleId: module.id,
    selector: 'app-driver',
    templateUrl: 'driver.component.html',
    styleUrls : ['driver.component.css'],
    providers: [ DriverService]
})
export class DriverComponent implements OnInit {

  @Input() driver:  {_id: number, name: string};
  @Input() costumer: {id: number, title: string};

  constructor(private _costumerService : DriverService) {
  //  this.driverNumber += 1;
  }

  myColor = 'gray';

    ngOnInit() { }

  deleteDriver(){
    alert(this.driver._id);
    this._costumerService.deleteUser_RXObservable(this.driver._id)
      .subscribe(
        //it worked
        ( costumers ) => {console.log(costumers)},
        //error
        (err) => {console.log(err);}
      );
  }
}
