import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor() {
    }

    getMenuItems(): string[] {
        return [
            '配置邮件', '对象存储', '添加.ssh', 'API访问情况',
            '举报评论列表', '文章修改记录', '添加捐赠图片', '管理文章'
        ];
    }
}
