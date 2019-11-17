import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LinkService} from '../../service/link.service';
import {NzNotificationService, UploadXHRArgs} from 'ng-zorro-antd';
import {DonateService} from '../../service/donate.service';

@Component({
    selector: 'app-config-donate',
    templateUrl: './config-donate.component.html',
    styleUrls: ['./config-donate.component.scss']
})
export class ConfigDonateComponent implements OnInit {

    @ViewChild('alipay', {static: false})
    alipay: ElementRef;

    @ViewChild('wechat', {static: false})
    wechat: ElementRef;

    constructor(
        private linkService: LinkService,
        private donateService: DonateService,
        private notificationService: NzNotificationService
    ) {
    }

    ngOnInit() {
    }

    alipayRequest = (item: UploadXHRArgs) => {
        this.donateService.uploadAlipay(item.file)
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.notificationService.success('上传', '支付宝收款码上传成功');
                        this.reload();
                    }
                }
            );
    }

    wechatRequest = (item: UploadXHRArgs) => {
        return this.donateService.uploadWechat(item.file)
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.notificationService.success('上传', '微信收款码上传成功');
                        this.reload();
                    }
                }
            );
    }

    getAlipay(): string {
        return this.linkService.getBackendUrl() + '/donate/alipay';
    }

    getWechat(): string {
        return this.linkService.getBackendUrl() + '/donate/wechat';
    }

    reload() {
        setTimeout(() => {
                location.reload();
            },
            1500
        );
    }
}
