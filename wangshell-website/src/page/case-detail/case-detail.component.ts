import { CaseListModel } from './../../model/case-list.model';
import { CommonHttpService } from './../../module/http/common-http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CaseDetail } from './../../model/case-detail.model';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {

  /** @name 案例详情对象 */
  public caseDetail: CaseDetail;
  
  constructor(private router: ActivatedRoute, private commonHttpService: CommonHttpService) { }

  ngOnInit() {
    let caseId = this.router.snapshot.paramMap.get('id');
    // let caseId = '';
    this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
      caseId = params.get('id')
    ));
    console.log('caseId -> ' + caseId);;
    console.log('ngOnInit');

    /** @name 获取案例详情 */
    this.commonHttpService.getCaseDetail(d => {
      let caseDetailList: CaseDetail[] = d.case_info;
      this.caseDetail = caseDetailList.find(i => i.case_id == caseId);
      console.log(this.caseDetail);;
    });
    
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

}
