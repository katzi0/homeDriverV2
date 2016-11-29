import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { testComponent }   from './test.component';

import { TestRoutingModule } from './test-routing.module';

@NgModule({
    //exports: [testComponent],
    declarations: [testComponent],
    providers: [],
    imports: [TestRoutingModule, CommonModule, FormsModule]
})
export class testModule { }
