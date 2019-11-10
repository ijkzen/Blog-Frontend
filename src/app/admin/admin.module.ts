import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {
    NzButtonModule,
    NzCheckboxModule,
    NzDescriptionsModule,
    NzGridModule,
    NzInputModule,
    NzLayoutModule,
    NzModalModule,
    NzNotificationModule,
    NzRadioModule,
    NzTableModule
} from 'ng-zorro-antd';
import {AdminRoutingModule} from './admin-routing.module';
import {ConfigMailComponent} from './config-mail/config-mail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfigOssComponent} from './config-oss/config-oss.component';
import {UrlCountComponent} from './url-count/url-count.component';

@NgModule({
    declarations: [
        AdminComponent,
        ConfigMailComponent,
        ConfigOssComponent,
        UrlCountComponent
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
        NzTableModule
    ]
})
export class AdminModule {
}
