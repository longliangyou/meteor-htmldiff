Tinytest.add('insert some text - difference', function (test) {
  test.equal(true, true);
  var originHtmlText = "<p>this is some text</p>";
  var changedText = "<p>this is some more text</p>";
  var diffText = "<p>this is some <ins>more </ins>text</p>";

  var htmlDiffText = htmldiff(originHtmlText, changedText);

  test.equal(htmlDiffText, diffText);
});
