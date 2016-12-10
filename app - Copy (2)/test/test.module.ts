import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { testComponent }   from './test.component';

import { TestRoutingModule } from './test-routing.module';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    //exports: [testComponent],
    declarations: [testComponent],
    providers: [],
    imports: [TestRoutingModule, CommonModule, FormsModule, AlertModule]
    //test
})
export class testModule { }
