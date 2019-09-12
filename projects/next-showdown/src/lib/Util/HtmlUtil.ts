import * as Showdown from 'showdown';
import * as highLight from 'showdown-highlight';
import * as math from 'showdown-formula';
import * as mermaidLabel from 'showdown-mermaid';
import * as bilibiliLabel from 'showdown-bilibili';
import * as taskList from 'showdown-tasklist';

export class HtmlUtil {
  private showdown = new Showdown.Converter(
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

  getHtml(md: string): string {
    return this.showdown.makeHtml(md);
  }
}
