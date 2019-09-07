"use strict";

const katex = require('katex');

let inlineConfig = {
  displayMode: false,
  throwOnError: true,
  output: "mathml"
};

let blockConfig = {
  displayMode: true,
  throwOnError: true
};
module.exports = function showdownMath() {
  return [
    {
      type: "lang",
      regex: /(```)([\s\S]+?)(```)/g,
      replace: function (whole, left, content, right, location, text) {
        return whole.replace(/¨D/g, "¨K");
      }
    },
    {
      type: "lang",
      regex: /(>\s¨D¨D)([\s\S]+?)(>\s¨D¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        let lines = whole.split(/[\n]/);
        let tmp = [];
        tmp.push(whole);
        let result = "";
        const size = lines.length - 1;
        for (let i = 0; i <= size; i++) {
          if (lines[i].charAt(0) === '>') {
            lines[i] = lines[i].substring(1, lines[i].length)
          }
        }
        for (let i = 0; i <= size; i++) {
          result += lines[i]
        }
        console.error(result);
        return result;
      }
    },
    {
      type: "lang",
      regex: /(¨D¨D)([\s\S]+?)(¨D¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        // console.error('inline parse');
        return renderBlock(whole, content);
      }
    },
    {
      type: "lang",
      regex: /(¨D)([\s\S]+?)(¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        // console.error('block parse');
        return renderInline(whole, content);
      }
    },
    {
      type: "lang",
      regex: /(```)([\s\S]+?)(```)/g,
      replace: function (whole, left, content, right, location, text) {
        // console.error('parse output');
        return whole.replace(/¨K/g, "¨D");
      }
    },
  ];
};

function renderInline(whole, content) {
  // console.log(content);
  return katex.renderToString(content, inlineConfig);
}

function renderBlock(whole, content) {
  return katex.renderToString(content, blockConfig);
}


