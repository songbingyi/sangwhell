import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var Swiper;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, public router: Router) {
    this.title.setTitle('上海汪壳网络科技有限公司');
  }

  ngOnInit() {
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
