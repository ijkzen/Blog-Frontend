"use strict";

const katex = require('katex');

module.exports = function showdownMath() {
  return [
    {
      type: "lang",
      regex: /(¨D¨D)([\s\S]+?)(¨D¨D)/g,
      replace: function (whole, left, content, right, location, text) {
        console.log(text);
        return katex.renderToString(content,
          {
            displayMode: true,
            throwOnError: true
          }
        );
      }
    },
    {
      type: "lang",
      regex: /(¨D)([\s\S]+?)(¨D)/g,
      replace: function (whole, left, content, right, location, text) {

        return katex.renderToString(content,
          {
            throwOnError: true
          }
        );
      }
    }
  ];
};
