import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {ConfigMailComponent} from './config-mail/config-mail.component';
import {ConfigOssComponent} from './config-oss/config-oss.component';
import {UrlCountComponent} from './url-count/url-count.component';
import {ReportCommentComponent} from './report-comment/report-comment.component';
import {EditArticleListComponent} from './edit-article-list/edit-article-list.component';

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
