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
  }
}
