import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';

@NgModule({
  imports: [
    CommonModule,
    WorksRoutingModule
  ],
  declarations: [
    WorksComponent,
  ]
})
export class WorksModule { }
