import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component'
import { CryptoComponent } from '../crypto/crypto.component'
import { BlogComponent } from '../blog/blog.component'


const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'crypto',
        component: CryptoComponent,
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