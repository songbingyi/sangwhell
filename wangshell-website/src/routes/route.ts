import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../page/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/index.html', pathMatch: 'full' },
    { path: 'index.html', component: HomeComponent, },
    { path: 'works', loadChildren: '../page/works/works.module#WorksModule' },
    { path: 'about', loadChildren: '../page/about/about.module#AboutModule' },
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

