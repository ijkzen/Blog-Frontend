import {Article} from '../service/bean/data/Article';

export interface EditArticleInterface {
  origin: Article;
  changed: Article;
}
