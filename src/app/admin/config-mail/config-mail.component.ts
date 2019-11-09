import {Component, OnInit} from '@angular/core';
import {MailService} from '../../service/mail.service';
import {NzModalService} from 'ng-zorro-antd';
import {Email} from '../../service/bean/data/Email';

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

    constructor(
        private mailService: MailService,
        private modalService: NzModalService
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
            this.mailService.configEmail(result)
                .subscribe(
                    next => {
                        if (next.errCode === '000') {
                            this.modalService.success(
                                {
                                    nzTitle: '邮件添加成功'
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
}
