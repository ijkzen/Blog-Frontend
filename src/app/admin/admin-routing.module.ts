import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {ConfigMailComponent} from './config-mail/config-mail.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'config/mail',
        component: ConfigMailComponent
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
