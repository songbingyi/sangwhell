import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../page/home/home.component';
import { WorksComponent } from '../page/works/works.component';
import { AboutComponent } from '../page/about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent,  },
    { path: 'works', component: WorksComponent, },
    { path: 'about', component: AboutComponent, },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}

