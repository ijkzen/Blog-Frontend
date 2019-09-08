module.exports = function showdownBiliBili() {
  return [
    {
      type: "lang",
      regex: /(<iframe src="\/\/player.bilibili.com\/player.html)([\s\S]+?)(<\/iframe>)/g,
      replace: function (whole, left, content, right, location, text) {
        return "<div class='bilibili'>" + whole + "</div>";
      }
    }
  ]
};
