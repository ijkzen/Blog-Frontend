"use strict";

const katex = require('katex');
let inlineConfig = {
  displayMode: false,
  throwOnError: true
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
        return whole.replace("¨D", "¨K");
      }
    },
    {
      type: "lang",
      regex: /(¨D¨D)([\s\S]+?)(¨D¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        return renderBlock(whole, content);
      }
    },
    {
      type: "lang",
      regex: /(¨D)([\s\S]+?)(¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        return renderInline(whole, content);
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

function renderInline(whole, content) {
  return katex.renderToString(content, inlineConfig);
}

function renderBlock(whole, content) {
  return katex.renderToString(content, blockConfig);
}


