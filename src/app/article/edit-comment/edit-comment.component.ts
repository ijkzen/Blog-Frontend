import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentService} from '../../service/comment.service';
import {Comment} from '../../service/bean/data/Comment';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  @Input()
  articleId: number;

  content: string;

  @Output()
  added = new EventEmitter<number>();

  constructor(
    private commentService: CommentService,
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
  }


  getAvatar(): string {
    return this.storageService.getAvatarUrl();
  }

  addComment() {
    const comment = new Comment();
    comment.content = this.content;
    comment.authorAvatar = this.storageService.getAvatarUrl();
    comment.createdTime = new Date();
    comment.articleId = this.articleId;
    comment.articleUrl = location.href;
    comment.authorId = Number(this.storageService.getDeveloperId());
    comment.authorName = this.storageService.getDeveloperName();
    this.commentService.addComment(comment)
      .subscribe(
        result => {
          if (result.errCode === '000') {
            this.added.emit(1);
            this.content = '';
          }
        }
      );
  }
}
