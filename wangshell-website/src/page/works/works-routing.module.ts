import { CaseDetailComponent } from './../case-detail/case-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './works.component';

const routes: Routes = [
  {
    path: '', component: WorksComponent,
    // children: [
    //   {
    //     path: '',
    //     children: [
    //       { path: ':id', component: CaseDetailComponent },
    //     ]
    //   }
    // ]
  },
  // { path: 'case-detail/:id', component: CaseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
