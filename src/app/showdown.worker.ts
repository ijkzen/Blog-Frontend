import * as Showdown from 'showdown';
import * as highLight from 'showdown-highlight';
import * as math from './showdown/MathExtension';
import * as mermaidLabel from './showdown/MermaidExtension';
import * as bilibiliLabel from './showdown/BiliBiliExtension';
import * as taskList from './showdown/TaskListExtension';

const showdown = new Showdown.Converter(
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

addEventListener('message', ({data}) => {
  showdown.setFlavor('github');
  const result = showdown.makeHtml(data);
  postMessage(result);
});
