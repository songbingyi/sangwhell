import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, ) { 
    this.title.setTitle('关于我们 | 上海汪壳网络科技有限公司');
  }

  ngOnInit() {
  }

}
