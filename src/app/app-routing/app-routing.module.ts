import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component'
import { BalanceComponent } from '../balance/balance.component'
import { BlogComponent } from '../blog/blog.component'


const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'balance',
        component: BalanceComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }