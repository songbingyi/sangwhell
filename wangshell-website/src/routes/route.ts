import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../page/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent, },
    { path: 'works', loadChildren: '../page/works/works.module#WorksModule' },
    { path: 'about', loadChildren: '../page/about/about.module#AboutModule' },
    // 路由器使用先匹配者优先的策略来匹配路由，因此 404 放在最后则意味着以上的路由都未能匹配，才会跳转指定404
    { path: '**', component: HomeComponent } //需要修改为404页面
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

