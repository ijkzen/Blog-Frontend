import {Component, OnInit} from '@angular/core';
import {MailService} from '../../service/mail.service';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {Email} from '../../service/bean/data/Email';
import {TestEmail} from '../../service/bean/data/TestEmail';

@Component({
    selector: 'app-config-mail',
    templateUrl: './config-mail.component.html',
    styleUrls: ['./config-mail.component.scss']
})
export class ConfigMailComponent implements OnInit {

    host: string;

    email: string;

    password: string;

    port: number;

    startTls: boolean;

    test = new TestEmail();

    testDialogVisible = false;

    testDialogOkLoading = false;

    constructor(
        private mailService: MailService,
        private modalService: NzModalService,
        private notificationService: NzNotificationService
    ) {
    }

    ngOnInit() {
    }

    configMail() {
        const result = new Email();
        if (this.host === undefined || this.email === undefined || this.password === undefined || this.port === undefined) {
            this.modalService.error(
                {
                    nzTitle: '信息不足',
                    nzContent: '请补全相关信息'
                }
            );
        } else {
            result.host = this.host;
            result.password = this.password;
            result.userName = this.email;
            result.port = this.port;
            result.startTls = this.startTls;
            result.inUse = true;
            this.mailService.configEmail(result)
                .subscribe(
                    next => {
                        if (next.errCode === '000') {
                            this.modalService.confirm(
                                {
                                    nzTitle: '邮件添加成功',
                                    nzContent: '是否测试当前邮箱？',
                                    nzOnOk: () => this.openTestDialog()
                                }
                            );
                        } else {
                            this.modalService.error(
                                {
                                    nzTitle: '警告',
                                    nzContent: next.errMessage
                                }
                            );
                        }
                    }
                );
        }
    }

    openTestDialog() {
        this.testDialogVisible = true;
    }

    testMail() {
        this.testDialogOkLoading = true;
        this.mailService.testEmail(this.test)
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.testDialogOkLoading = false;
                        this.testDialogVisible = false;
                        this.notificationService.success(
                            '邮件发送成功',
                            '请注意查收，可能被分类为垃圾邮件'
                        );
                    }
                }
            );
    }
}
