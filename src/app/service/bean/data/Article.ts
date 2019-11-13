export class Article {
  constructor(
      public id: number = -1,
      public fileName: string = '',
      public author: string = '',
      public shown: boolean = true,
      public deleted: boolean = false,
      public title: string = '',
      public category: string = '',
      public visits: number = 0,
      public commentId: number,
      public createdTime: Date,
      public updatedTime: Date,
      public content: string = '',
      public abstract: string = '',
      public contributors: string = ''
  ) {
  }
}
