import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentsBean} from './bean/CommentsBean';
import {Observable} from 'rxjs';
import {Comment} from './bean/data/Comment';
import {BaseBean} from './bean/BaseBean';
import {CountBean} from './bean/CountBean';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private client: HttpClient
  ) {
  }

  getComments(articleId: number): Observable<CommentsBean> {
    return this.client.get<CommentsBean>('/comment/' + articleId);
  }

  addComment(comment: Comment): Observable<BaseBean> {
    return this.client.post<BaseBean>('/comment/new', comment);
  }

  deleteComment(commentId: number): Observable<BaseBean> {
    return this.client.delete<BaseBean>('/comment/' + commentId);
  }

  reportComment(commentId: number): Observable<BaseBean> {
    return this.client.get<BaseBean>('/comment/report/' + commentId);
  }

  getReportedComments(): Observable<CommentsBean> {
    return this.client.get<CommentsBean>('/comment/report/list');
  }

  getCount(): Observable<CountBean> {
    return this.client.get<CountBean>('/comment/count');
  }

  batchDeleteComment(list: number[]): Observable<BaseBean> {
    return this.client.post<BaseBean>('/comment/batchDelete', list);
  }

  batchCancelReportComment(list: number[]): Observable<BaseBean> {
    return this.client.post<BaseBean>('/comment/batchCancel', list);
  }
}
