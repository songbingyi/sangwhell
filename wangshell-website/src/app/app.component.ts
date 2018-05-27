import { element } from 'protractor';
import { LocalStorageService, keyClientSetting } from './../module/services/local-storage.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpService } from '../module/services/http.service';
import { GET_CLIENT_CONFIG } from '../module/services/API';
import { KeyValue } from '../model/key-value.model';
import { ClientSettingModel } from '../model/client-setting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private httpService: HttpService, private localStorage: LocalStorageService) {

    httpService.httpPost(GET_CLIENT_CONFIG, '', (d, status) => {
      if (status) {
        let keyValeArray: KeyValue[] = d;
        keyValeArray.forEach(element => {
          if (element.key == 'client_setting') {
            let clientSetting: ClientSettingModel = element.data;
            localStorage.setCacheObject(keyClientSetting, clientSetting);
          }
        });
      }
    });
  }
}
