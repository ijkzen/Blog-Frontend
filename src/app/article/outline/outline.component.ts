import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';
import {Outline} from '../../service/bean/data/Outline';
import {OutlineTemp} from '../../service/bean/data/OutlineTemp';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.scss']
})
export class OutlineComponent implements OnInit, OnChanges {

  @Input()
  article: Article;

  root: Outline = new Outline();

  list: OutlineTemp[] = [];

  titleMap: Map<string, number[]> = new Map<string, number[]>();

  subtitleMap: Map<string, HTMLElement> = new Map<string, HTMLElement>();

  constructor() {
  }

  ngOnInit() {
    this.root.category = 0;
  }

  ngOnChanges(): void {
    if (this.article === null) {
      return;
    } else {
      this.root.title = this.article.title;
      const pattern = /(#{1,10})\s{1,4}(.+)/g;
      let result = pattern.exec(this.article.content);
      while (result) {
        const tmp = new OutlineTemp();
        tmp.category = result[1].length;
        tmp.title = result[2];
        this.list[this.list.length] = tmp;
        result = pattern.exec(this.article.content);
      }
      if (this.list.length !== 0) {
        this.buildTree(this.list[0].category, 0, this.list.length - 1, this.root);
        console.log(this.root);
      }
    }
  }

  buildTree(category: number, start: number, end: number, parent: Outline) {
    const index: number[] = [];
    parent.children = [];
    for (let i = start; i <= end; i++) {
      if (this.list[i].category === category) {
        index[index.length] = i;
        const tmp = new Outline();
        tmp.title = this.list[i].title;
        tmp.category = this.list[i].category;
        tmp.href = this.getHref(tmp.title);
        parent.children[parent.children.length] = tmp;
      }
    }
    if (index.length === 0) {
      return;
    } else {
      for (let i = 0; i < index.length; i++) {
        if (index[i] === end) {
          continue;
        }
        const categoryTmp = this.list[index[i] + 1].category;
        if (categoryTmp > category) {
          let endTmp: number;
          if (i === index.length - 1) {
            endTmp = end;
          } else {
            endTmp = index[i + 1];
          }
          this.buildTree(categoryTmp, index[i], endTmp, parent.children[i]);
        }
      }
    }
  }


  getHref(title: string): string {
    let result: string;
    const titleTmp = title.toLowerCase().replace(/\s/g, '-');
    if (this.titleMap.get(titleTmp) === undefined) {
      this.titleMap.set(titleTmp, [0]);
      result = titleTmp;
    } else {
      this.titleMap.get(titleTmp)[this.titleMap.get(titleTmp).length] = 0;
      const num = this.titleMap.get(titleTmp).length - 1;
      result = titleTmp + '-' + num;
    }

    return result;
  }

  scrollToElement(event: any, href: string) {
    this.cancelUnderline();
    this.getElement(event).style.textDecoration = 'underline';
    this.getElement(event).insertAdjacentElement('afterend', this.createElement(href));
    document.getElementById(href).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  getElement(event: any): HTMLElement {
    if (event instanceof Element) {
      return event as HTMLElement;
    } else {
      return (event.target as HTMLElement);
    }
  }

  cancelUnderline() {
    const collection = document.getElementsByClassName('outline-title');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < collection.length; i++) {
      (collection.item(i) as HTMLElement).style.textDecoration = 'none';
    }
  }

  getChildrenArray(href: string): Outline[] {
    const result = this.getChildren(this.root, href);
    if (result.clicked) {
      // result.clicked = false;
      // this.subtitleMap.get(href).style.display = 'none';
      return [];
    } else {
      result.clicked = true;
      return result.children;
    }
  }

  getChildren(outline: Outline, href: string): Outline {
    if (outline.children) {
      for (const item of outline.children) {
        if (item.href === href) {
          return item;
        } else {
          const result = this.getChildren(item, href);
          if (result != null) {
            return result;
          }
        }
      }
    } else {
      return null;
    }
  }

  getHtml(href: string): string {
    let htmlInserted = '';
    for (const item of this.getChildrenArray(href)) {
      // tslint:disable-next-line:max-line-length
      htmlInserted += '<span style="margin-left: 20px;cursor: pointer;" class="outline-title">' + item.title + '</span><br>';
    }

    return htmlInserted.substring(0, htmlInserted.length - 5);
  }

  createElement(href): Element {
    const element = document.createElement('div');
    element.innerHTML = this.getHtml(href);
    element.addEventListener('click', (ev => this.scrollToElement(element, href)));
    this.subtitleMap.set(href, element);
    return element;
  }
}
