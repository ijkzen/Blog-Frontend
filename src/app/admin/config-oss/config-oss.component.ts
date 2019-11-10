import {Component, OnInit} from '@angular/core';
import {OSS} from '../../service/bean/data/OSS';
import {OssService} from '../../service/oss.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
    selector: 'app-config-oss',
    templateUrl: './config-oss.component.html',
    styleUrls: ['./config-oss.component.scss']
})
export class ConfigOssComponent implements OnInit {

    oss = new OSS();

    constructor(
        private ossService: OssService,
        private modalService: NzModalService
    ) {
    }

    ngOnInit() {
        this.oss.category = 'aliyun';
    }

    commitOSS() {
        this.oss.inUse = true;
        this.ossService.setOSS(this.oss)
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.modalService.success(
                            {
                                nzTitle: '对象存储配置成功'
                            }
                        );
                    }
                }
            );
    }

}
