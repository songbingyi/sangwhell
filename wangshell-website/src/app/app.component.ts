import { element } from 'protractor';
import { LocalStorageService, keyClientSetting } from './../module/services/local-storage.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { GET_CLIENT_CONFIG } from '../module/services/API';
import { KeyValue } from '../model/key-value.model';
import { ClientSettingModel } from '../model/client-setting.model';
import { CommonHttpService } from '../module/http/common-http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** @name clientsetting数据 */
  public clientSetting: ClientSettingModel;

  constructor(private router: Router, private commonHttpService: CommonHttpService, private localStorage: LocalStorageService) {
    // this.commonHttpService.getClientConfig((d) => {
    //   this.clientConfig = d[0].data;
    // })

    commonHttpService.getClientConfig((d) => {
      let keyValeArray: KeyValue[] = d;
      keyValeArray.forEach(element => {
        if (element.key == 'client_setting') {
          this.clientSetting = element.data;
          localStorage.setCacheObject(keyClientSetting, this.clientSetting);
        }
      });
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
    //menu菜单
    $(function () {
      $('nav li').hover(
        function () {
              $('body').addClass("navhover");
              $(this).find('a').removeClass('backtoroll1')
              $(this).find('a').find('div').addClass('sidebardivani')
  
          },
          function () {
              $('body').removeClass("navhover");
              $(this).find('a').find('div').removeClass('sidebardivani')
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
  
      $('nav li').click(function () {
          $('header').removeClass('active');
          $('body').removeClass('showmenu');
          $('nav li').removeClass('active');
          $(this).addClass('active');
          $(this).find('a').addClass('backtoroll1');

          $(this).siblings().find('a').removeClass('backtoroll1');
          $(this).find('a').find('div').removeClass('sidebardivani')
          $('body').removeClass("navhover");
      });
  
      // window.addEventListener('orientationchange', function (e) {
      //     if (window.orientation == 0 || window.orientation == 180) {
      //         $('.popScreenH').hide();
      //         $('html,body').removeClass('h-hide');
      //     } else if (window.orientation == 90 || window.orientation == -90) {
      //         $('.popScreenH').show();
      //         $('html,body').addClass('h-hide');
      //     }
      // });
  });

  }

}
