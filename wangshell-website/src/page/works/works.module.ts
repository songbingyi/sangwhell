import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { CaseDetailComponent } from '../case-detail/case-detail.component';

@NgModule({
  imports: [
    CommonModule,
    WorksRoutingModule
  ],
  declarations: [
    WorksComponent,
    CaseDetailComponent,
  ]
})
export class WorksModule { }
