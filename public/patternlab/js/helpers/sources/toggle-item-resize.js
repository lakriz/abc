import $ from 'jquery';

const toggleItemsContentSelector = '.js-toggle-text__content';
const toggleSelector = '.js-toggle-text__trigger';

export default class ToggleItemResize {
  constructor(toggleItems) {
    this.contentElement = $(toggleItemsContentSelector, toggleItems);
    this.toggleElement = $(toggleSelector, toggleItems);

    this.init();
  }

  init() {
    this.hideShortText();
    window.addEventListener('resize', this.hideShortText.bind(this));
  }

  hideShortText() {
    const line = this.countLine(this.contentElement);

    if (line <= 2) {
      this.toggleElement.hide();
    } else {
      this.toggleElement.show();
    }
  }

  countLine(contentElement) {
    const maxHeight = contentElement.css('max-height');
    const height = contentElement.prop('scrollHeight');
    const lineHeigth = contentElement.css('line-height');

    return height / Number(lineHeigth.replace('px', ''));
  }
}
