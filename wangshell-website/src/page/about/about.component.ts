import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonHttpService } from '../../module/http/common-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private commonService: CommonHttpService) {
    this.title.setTitle('关于我们 | 上海汪壳网络科技有限公司');

    commonService.getDataInfo('1', (d) => {
      /** @todo 需要显示数据 */
    })
  }

  ngOnInit() {
    $('html,body').removeClass('h-show');
  }

}
