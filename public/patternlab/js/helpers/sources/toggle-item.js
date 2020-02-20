const buttonSelector = '.js-toggle-text__trigger';
const infoToShowSelector = '.js-toggle-text__content';

export default class ToggleItem {
  constructor(element, maxHeight) {
    this._element = element;
    this._maxHeight = maxHeight;
    this.toggleText = this.toggleText.bind(this);

    this.init();
  }

  init() {
    this._linkElement = this._element.querySelector(buttonSelector);
    this._linkElement.classList.remove('is-open');
    this._linkElement.addEventListener('click', this.toggleText);
    this._infoToShow = this._element.querySelector(infoToShowSelector);
    this._infoToShow.style.maxHeight = this._maxHeight + 'px';
  }

  toggleText() {
    if (
      !this._infoToShow.style.maxHeight ||
      this._infoToShow.style.maxHeight === this._maxHeight + 'px'
    ) {
      this.openText();
    } else {
      this.closeText();
    }
  }

  openText() {
    const elementHeight = Math.round(this._infoToShow.scrollHeight);
    this._infoToShow.style.maxHeight = elementHeight + 'px';
    this._linkElement.classList.add('is-open');
  }

  closeText() {
    this._infoToShow.style.maxHeight = this._maxHeight + 'px';
    this._linkElement.classList.remove('is-open');
  }
}
