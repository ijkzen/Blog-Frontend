/// <reference lib="webworker" />

import {HtmlService} from 'next-showdown';

const html = new HtmlService();

addEventListener('message', ({data}) => {
  const result = html.getHtml(data);
  postMessage(result);
});
