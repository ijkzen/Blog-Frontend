import {Injectable} from '@angular/core';

import * as Showdown from 'showdown';
import * as highLight from 'showdown-highlight';
import * as math from '../extension/MathExtension';
import * as mermaidLabel from '../extension/MermaidExtension';
import * as bilibiliLabel from '../extension/BiliBiliExtension';
import * as taskList from '../extension/TaskListExtension';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  showdown = new Showdown.Converter(
    {
      simplifiedAutoLink: true,
      strikethrough: true,
      tables: true,
      ghMentions: true,
      emoji: true,
      metadata: true,
      tasklists: true,
      smoothLivePreview: true,
      extensions: [
        bilibiliLabel,
        mermaidLabel,
        highLight,
        math,
        taskList
      ]
    }
  );

  constructor() {
    this.showdown.setFlavor('github');
  }

  getHtml(md: string): string {
    return this.showdown.makeHtml(md);
  }
}
