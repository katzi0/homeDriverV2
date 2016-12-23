import {Component, OnInit, Input} from '@angular/core';
import { PassengerComponent } from './passenger.component';

@Component({
  selector: 'passenger-detail',
  templateUrl: 'passenger-detail.component.html'
})
export class PassengerDetailComponent implements OnInit {

  @Input() passenger: PassengerComponent;

  constructor() { }


  ngOnInit() { }

}
