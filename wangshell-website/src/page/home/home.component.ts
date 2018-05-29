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

  public homeData;
  constructor(private title: Title, public router: Router,private commonService: CommonHttpService) {
    this.title.setTitle('上海汪壳网络科技有限公司');

    commonService.getBannerList('1', (d) => {
      /** @todo 需要显示数据 */
      this.homeData = d.banner_list;
      console.log(this.homeData[0].image.thumb+"333")
    })
  }

  ngOnInit() {
    $('html,body').removeClass('h-show');
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      effect: 'fade',
      speed: 1000,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
