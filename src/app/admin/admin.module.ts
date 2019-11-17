import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {
    NzButtonModule,
    NzCheckboxModule,
    NzDescriptionsModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzModalModule,
    NzNotificationModule,
    NzRadioModule,
    NzSkeletonModule,
    NzStepsModule,
    NzTableModule,
    NzUploadModule
} from 'ng-zorro-antd';
import {AdminRoutingModule} from './admin-routing.module';
import {ConfigMailComponent} from './config-mail/config-mail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfigOssComponent} from './config-oss/config-oss.component';
import {UrlCountComponent} from './url-count/url-count.component';
import {ReportCommentComponent} from './report-comment/report-comment.component';
import {EditArticleListComponent} from './edit-article-list/edit-article-list.component';
import {OnlyCompareTextComponent} from './only-compare-text/only-compare-text.component';
import {OnlyCompareOutlineComponent} from './only-compare-outline/only-compare-outline.component';
import {OnlyCompareViewComponent} from './only-compare-view/only-compare-view.component';
import {EditModule} from '../edit/edit.module';
import {NextShowdownModule} from 'next-showdown';
import {ConfigDonateComponent} from './config-donate/config-donate.component';

@NgModule({
    declarations: [
        AdminComponent,
        ConfigMailComponent,
        ConfigOssComponent,
        UrlCountComponent,
        ReportCommentComponent,
        EditArticleListComponent,
        OnlyCompareTextComponent,
        OnlyCompareOutlineComponent,
        OnlyCompareViewComponent,
        ConfigDonateComponent
    ],
    imports: [
        CommonModule,
        NzLayoutModule,
        NzDescriptionsModule,
        AdminRoutingModule,
        NzGridModule,
        NzInputModule,
        ReactiveFormsModule,
        NzCheckboxModule,
        FormsModule,
        NzButtonModule,
        NzModalModule,
        NzNotificationModule,
        NzRadioModule,
        NzTableModule,
        NzStepsModule,
        EditModule,
        NzSkeletonModule,
        NextShowdownModule,
        NzIconModule,
        NzUploadModule
    ]
})
export class AdminModule {
}
