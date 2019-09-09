//<input type="checkbox" disabled="" style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;">

module.exports = function showdownTaskList() {
  return [
    {
      type: "output",
      regex: /(<input type="checkbox")([\s\S]+?)(>)/g,
      replace: function (whole, left, content, right, location, text) {
        console.error(whole);
        return whole.replace("-1.6em", "0.25em");
      }
    }
  ]
};

