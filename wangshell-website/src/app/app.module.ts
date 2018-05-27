import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../routes/route';
import { HomeComponent } from '../page/home/home.component';
import { WorksComponent } from '../page/works/works.component';
import { AboutComponent } from '../page/about/about.component';
import { LocalStorageService } from '../module/services/local-storage.service';
import { HttpService } from '../module/services/http.service';
import { HttpModule } from '@angular/http';
import { UtilService } from '../module/services/util.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [
    LocalStorageService,
    HttpService,
    LocalStorageService,
    UtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
