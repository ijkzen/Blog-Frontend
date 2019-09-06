"use strict";

const katex = require('katex');
let codeBlocks = [];
let codeSearched = false;
module.exports = function showdownMath() {
  return [
    {
      type: "lang",
      regex: /(```)([\s\S]+?)(```)/g,
      replace: function (whole, left, content, right, location, text) {
        return whole.replace("¨D", "¨K");
      }
    },
    {
      type: "lang",
      regex: /(¨D¨D)([\s\S]+?)(¨D¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        let result;
        if (codeSearched) {
          result = renderBlock(whole, content);
        } else {
          codeSearched = true;
          searchCodeBlocks(text);
          result = renderBlock(whole, content);
        }

        return result;
      }
    },
    {
      type: "lang",
      regex: /(¨D)([\s\S]+?)(¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        let result;
        if (codeSearched) {
          result = renderInline(whole, content);
          // console.log('searched: ' + result);
        } else {
          codeSearched = true;
          searchCodeBlocks(text);
          result = renderInline(whole, content);
          // console.log('not search: ' + result);
        }
        // console.log('final result: ' + result);
        return result;
      }
    },
    {
      type: "lang",
      regex: /(```)([\s\S]+?)(```)/g,
      replace: function (whole, left, content, right, location, text) {
        return whole.replace("¨K", "¨D");
      }
    },
  ];
};

function searchCodeBlocks(text) {
  let pattern = /(```)([\s\S]+?)(```)/g;
  let tmp;
  while (tmp = pattern.exec(text)) {
    codeBlocks.push(tmp[0]);
  }
  console.log(codeBlocks);
}

function renderInline(whole, content) {
  let result;
  console.log(whole);
  if (codeBlocks.length === 0) {
    console.error('count is 0');
    result = katex.renderToString(
      content,
      {
        displayMode: false,
        throwOnError: true
      }
    );
  } else {
    console.error('count is not 0');
    for (let i = 0, len = codeBlocks.length; i < len; i++) {
      let index = whole.lastIndexOf("```");
      if (index === -1) {
        index = whole.length - 1;
      }
      if (codeBlocks[i].includes(whole.substring(0, index))) {
        result = whole;
        break;
      }
    }
    if (result !== whole) {
      result = katex.renderToString(
        content,
        {
          displayMode: false,
          throwOnError: true
        }
      );
    }
  }
  return result;
}

function renderBlock(whole, content) {
  let result;
  if (codeBlocks.length === 0) {
    result = katex.renderToString(
      content,
      {
        displayMode: true,
        throwOnError: true
      }
    );
  } else {
    for (let i = 0, len = codeBlocks.length; i < len; i++) {
      if (codeBlocks[i].includes(whole)) {
        result = whole;
        break;
      } else {
        result = katex.renderToString(
          content,
          {
            displayMode: true,
            throwOnError: true
          }
        );
      }
    }
  }
  return result;
}


