import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../service/bean/data/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;

  @Output()
  reply = new EventEmitter<Comment>();

  @Output()
  report = new EventEmitter<Comment>();

  constructor() {
  }

  ngOnInit() {
  }

  replyComment() {
    this.reply.emit(this.comment);
  }

  reportComment() {
    this.report.emit(this.comment);
  }

  formatDate(date: Date): string {
    const tmp = new Date(date);
    return tmp.getFullYear() + '-' + tmp.getMonth() + '-' + tmp.getDay();
  }

  getDateDisplay(): string {
    let result: string;
    result = this.formatDate(this.comment.createdTime);
    if (this.comment.replyName) {
      result += '  回复：' + this.comment.replyName;
    }
    return result;
  }
}
