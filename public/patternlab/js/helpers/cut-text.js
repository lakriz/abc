import $ from 'jquery';

$.fn.cutText = function(options) {
  const settings = $.extend(
    {
      start: 0,
      length: 150
    },
    options
  );

  if ($(this).length > 0) {
    return this.each((index, element) => {
      const string = $(element).text();
      const stringTrim = $.trim(string);
      let countTags = 0;
      let returnString = '';
      let writeLetters = 0;
      while (!(writeLetters >= settings.length && countTags === 0)) {
        const letter = stringTrim.charAt(settings.start + writeLetters);
        if (letter === '<') {
          countTags++;
        }
        if (letter === '>') {
          countTags--;
        }
        returnString += letter;
        writeLetters++;
      }
      $(element).html(returnString + '...');
    });
  }
};
