import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

    /** @name 右侧导航栏效果 */
    $(function () {
      $('nav').hover(
        function () {
          $('body').addClass("navhover");
        },
        function () {
          $('body').removeClass("navhover");
        }
      );
      $('.header-btn .menu').click(function () {
        if ($('header').hasClass('active')) {
          $('header').removeClass('active');
          $('body').removeClass('showmenu');
        } else {
          $('header').addClass('active');
          $('body').addClass('showmenu');
        }
      });
      window.addEventListener('orientationchange', function (e) {
        if (window.orientation == 0 || window.orientation == 180) {
          $('.popScreenH').hide();
          $('html,body').removeClass('h-hide');
        } else if (window.orientation == 90 || window.orientation == -90) {
          $('.popScreenH').show();
          $('html,body').addClass('h-hide');
        }
      });
    });
  }
}
