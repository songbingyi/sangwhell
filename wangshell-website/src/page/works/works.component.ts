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

  /** @name 案例数据列表 */
  public CaseList: CaseListModel[];
  /** @name 案例详情数据列表 */
  public caseDetailList: CaseDetail[];
  /** @name 案例详情数据 */
  public caseDetail: CaseDetail;
  /** @name 当前选中的案例下标，默认选中第一个 */
  private currentSelectCaseIndex: number = 0;

  constructor(private title: Title, private commonHttpService: CommonHttpService) {
    this.title.setTitle('案例展示 | 上海汪壳网络科技有限公司');
    /** @name 获取案例数据列表 */
    commonHttpService.getCaseList(d => {
      this.CaseList = d.case_list;
    });
    /** @name 获取案例详情 */
    commonHttpService.getCaseDetail(d => {
      this.caseDetailList = d.case_info;
      this.caseDetail = d.case_info[this.currentSelectCaseIndex];
    })
    setTimeout(() => {
      $('div.sub-menu ul li:first-child').addClass('active');
    }, 1);
  }

  ngOnInit() {
    $('html,body').addClass('h-show');

    setTimeout(() => {
      $('div.sub-menu ul li').click(function () {
        console.log('click');
        $('div.sub-menu ul li').removeClass('active');
        $(this).addClass('active');
      });
    }, 1);
  }

  /**
   *  @name 点击获取当前list的内容
   *  @param @id 获取当前点击项目的case_id
   */
  onSelect(id: string): void {
    var l = this.caseDetailList;
    for (var i = 0; i < l.length; i++) {
      if (l[i].case_id == id) {
        this.currentSelectCaseIndex = i;
        this.caseDetail = l[i];
        this.setWindowBackTop();
      }
    }
  }

  /**
   * @name 切换页面
   * @param isNext 是否请求下一页数据，否为上一页
   */
  changePage(isNext: boolean) {
    isNext ? this.currentSelectCaseIndex++ : this.currentSelectCaseIndex--;
    //当前是最后一条
    if (this.currentSelectCaseIndex > this.caseDetailList.length - 1) {
      this.currentSelectCaseIndex = 0;
    }
    //当前是第一条
    if (this.currentSelectCaseIndex < 0) {
      this.currentSelectCaseIndex = this.caseDetailList.length - 1;
    }
    console.log('currentSelectCaseIndex -> ' + this.currentSelectCaseIndex);
    this.caseDetail = this.caseDetailList[this.currentSelectCaseIndex];
    this.setWindowBackTop();
  }

  /** @name 回到页面顶部 */
  private setWindowBackTop() {
    window.scrollTo(0, 0);
  }

  /**
   * @name 点击翻页
   * @param n 获取当年case_id
   * @param c 1是next，-1是prev
   */
  ChangePage(n: string, c: string): void {
    var current_id = parseInt(n) + parseInt(c);
    if (current_id > this.caseDetailList.length) {
      current_id = 1;
    }
    if (current_id == 0) {
      current_id = 3
    }
    current_id--;
    this.caseDetail = this.caseDetailList[current_id];
  }
}
