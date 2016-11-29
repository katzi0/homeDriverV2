import {Component, OnInit, Input} from '@angular/core';
import { DriverComponent } from './driver.component';

@Component({
  selector: 'costumer-detail',
  templateUrl: 'driver-detail.component.html'
})
export class DriverDetailComponent implements OnInit {

  @Input() driver: DriverComponent;

  constructor() { }


  ngOnInit() { }

}
