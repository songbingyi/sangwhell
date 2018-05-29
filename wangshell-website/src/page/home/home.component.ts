import { BannerInfoModel } from './../../model/baner-info.model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpService } from '../../module/http/common-http.service';
declare var Swiper;
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** @name banner数据 */
  public bannerList: BannerInfoModel[];

  constructor(private title: Title, public router: Router,
    private commonService: CommonHttpService) {

    this.title.setTitle('上海汪壳网络科技有限公司');
  }

  ngOnInit() {
    this.commonService.getBannerList((d) => {
      this.bannerList = d.banner_list;
      setTimeout(() => {
        var swiper = new Swiper('.swiper-container', {
          loop: true,
          effect: 'fade',
          speed: 1000,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }, 1);
    })
    $('html,body').removeClass('h-show');
  }
}
