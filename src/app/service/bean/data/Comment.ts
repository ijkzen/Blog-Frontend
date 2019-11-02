export class Comment {
  id: number;
  articleId: number;
  articleUrl: string;
  authorId: number;
  authorName: string;
  authorAvatar: string;
  replyId: number;
  replyName: string;
  createdTime: Date;
  content: string;
  reported: boolean;
  deleted: boolean;
}
