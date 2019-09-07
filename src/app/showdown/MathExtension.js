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
    // escape all `$` at code
    {
      type: "lang",
      regex: /(```)([\s\S]+?)(```)/g,
      replace: function (whole, left, content, right, location, text) {
        return whole.replace(/¨D/g, "¨K");
      }
    },
    {
      type: "lang",
      regex: /(`)((¨D)+?)([\S]+?)(`)/g,
      replace: function (whole, left, content, right, location, text) {
        return whole.replace(/¨D/g, "¨K");
      }
    },
    // render math at quote block
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
        return result;
      }
    },
    // render math block first
    {
      type: "lang",
      regex: /(¨D¨D)([\s\S]+?)(¨D¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        // console.error('block parse'+whole);
        return renderBlock(whole, content);
      }
    },
    // render inline math second
    {
      type: "lang",
      regex: /(¨D)([\S\s]+?)(¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        // console.error('block parse');
        return renderInline(whole, content);
      }
    },
    {
      type: "lang",
      regex: /(`)((¨K)+?)([\S]+?)(`)/g,
      replace: function (whole, left, content, right, location, text) {
        return whole.replace(/¨K/g, "¨D");
      }
    },
    // re-escape `$`
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


