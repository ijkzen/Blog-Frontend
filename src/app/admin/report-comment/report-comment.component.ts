import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../service/comment.service';
import {Comment} from '../../service/bean/data/Comment';
import {NzModalService} from 'ng-zorro-antd';

@Component({
    selector: 'app-report-comment',
    templateUrl: './report-comment.component.html',
    styleUrls: ['./report-comment.component.scss']
})
export class ReportCommentComponent implements OnInit {

    commentList: Comment[];

    list: number[] = [];

    constructor(
        private commentService: CommentService,
        private modalService: NzModalService
    ) {
    }

    ngOnInit() {
        this.commentService.getReportedComments()
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.commentList = result.list;
                    }
                }
            );
    }


    showCommentContent(content: string) {
        this.modalService.info(
            {
                nzTitle: '评论内容',
                nzContent: content
            }
        );
    }
}
