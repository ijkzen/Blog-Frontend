import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {ConfigMailComponent} from './config-mail/config-mail.component';
import {ConfigOssComponent} from './config-oss/config-oss.component';
import {UrlCountComponent} from './url-count/url-count.component';
import {ReportCommentComponent} from './report-comment/report-comment.component';
import {EditArticleListComponent} from './edit-article-list/edit-article-list.component';
import {OnlyCompareOutlineComponent} from './only-compare-outline/only-compare-outline.component';
import {ConfigDonateComponent} from './config-donate/config-donate.component';
import {ConfigArticlesComponent} from './config-articles/config-articles.component';
import {IpCountComponent} from './ip-count/ip-count.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'config/mail',
        component: ConfigMailComponent
    },
    {
        path: 'config/oss',
        component: ConfigOssComponent
    },
    {
        path: 'url/list',
        component: UrlCountComponent
    },
    {
        path: 'comment/report',
        component: ReportCommentComponent
    },
    {
        path: 'edit-article/list',
        component: EditArticleListComponent
    },
    {
        path: 'compare/:origin/:changed',
        component: OnlyCompareOutlineComponent
    },
    {
        path: 'config/donate',
        component: ConfigDonateComponent
    },
    {
        path: 'config/articles',
        component: ConfigArticlesComponent
    },
  {
        path: 'index/ip',
        component: IpCountComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}
