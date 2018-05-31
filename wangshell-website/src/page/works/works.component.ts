import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CaseListModel } from '../../model/case-list.model';
import { CommonHttpService } from '../../module/http/common-http.service';
import { CaseDetail } from '../../model/case-detail.model'


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  public CaseList: CaseListModel;
  public CaseDetailList;
  public CaseDetail: CaseDetail;

  constructor(private title: Title, private commonHttpService: CommonHttpService) {
    this.title.setTitle('案例展示 | 上海汪壳网络科技有限公司');
    commonHttpService.getCaseList(d => {
      this.CaseList = d.case_list;
    });
    commonHttpService.getCaseDetail(d => {
      this.CaseDetailList = d.case_info;
      this.CaseDetail = d.case_info[0];

    })
  }
  /**
   *  @name 点击获取当前list的内容
   *  @param @id 获取当前点击项目的case_id
   */
  onSelect(id: string): void {
    var l = this.CaseDetailList;
    for (var i = 0; i < l.length; i++) {
      if (l[i].case_id == id) {
        this.CaseDetail = l[i];

      }
    }
  }
  /**
   * @name 点击翻页
   * @param n 获取当年case_id
   * @param c 1是next，-1是prev
   */
  ChangePage(n: string,c: string): void {
    var current_id = parseInt(n)+parseInt(c);
    if(current_id > this.CaseDetailList.length){
      current_id = this.CaseDetailList.length;
    }
    if(current_id == 0){
      current_id =1
    }
    current_id--;
    this.CaseDetail = this.CaseDetailList[current_id];
  }

  ngOnInit() {

    $('html,body').addClass('h-show');
  }

}
