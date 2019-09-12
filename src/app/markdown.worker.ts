/// <reference lib="webworker" />

import * as makeHtml from 'showdown-html';

addEventListener('message', ({data}) => {
  const result = makeHtml(data);
  console.error(result);
  postMessage(result);
});
