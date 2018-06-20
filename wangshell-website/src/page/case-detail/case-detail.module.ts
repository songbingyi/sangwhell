import { CaseDetailComponent } from './case-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseDetailRoutingModule } from './case-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CaseDetailRoutingModule,
  ],
  declarations: [
    CaseDetailComponent
  ]
})
export class CaseDetailModule { }
