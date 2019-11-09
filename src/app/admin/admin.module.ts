import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {
    NzButtonModule,
    NzCheckboxModule,
    NzDescriptionsModule,
    NzGridModule,
    NzInputModule,
    NzLayoutModule
} from 'ng-zorro-antd';
import {AdminRoutingModule} from './admin-routing.module';
import {ConfigMailComponent} from './config-mail/config-mail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [AdminComponent, ConfigMailComponent],
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
        NzButtonModule
    ]
})
export class AdminModule {
}
