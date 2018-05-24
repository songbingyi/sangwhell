import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private title: Title, ) {
    this.title.setTitle('案例展示 | 上海汪壳网络科技有限公司');
  }

  ngOnInit() {
      $('html,body').addClass('h-show');
  }

}
