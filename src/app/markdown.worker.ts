/// <reference lib="webworker" />

import {HtmlUtil} from 'next-showdown';

const html = new HtmlUtil();

addEventListener('message', ({data}) => {
  const result = html.getHtml(data);
  postMessage(result);
});
