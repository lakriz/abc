import $ from 'jquery';

export default class ToggleContainerItem {
  constructor(element, selector, toggleAllSelector, toggleItemObjects) {
    this._element = element;
    this._toggleAllSelector = toggleAllSelector;
    this._toggleAllElement = document.querySelector(toggleAllSelector);
    this._allToggleItemObjects = toggleItemObjects;
    this._currentToggleItemObjects = document.querySelectorAll(selector);

    this.init();
  }

  init() {
    var allToggleItemObjects = [];
    for (var i = 0; i < this._allToggleItemObjects.length; i++) {
      allToggleItemObjects.push(this._allToggleItemObjects[i]._element);
    }

    var currentToggleItemObjects = [];
    for (var i = 0; i < this._currentToggleItemObjects.length; i++) {
      if (
        allToggleItemObjects.indexOf(this._currentToggleItemObjects[i]) > -1
      ) {
        var currentIndex = allToggleItemObjects.indexOf(
          this._currentToggleItemObjects[i]
        );
        currentToggleItemObjects.push(this._allToggleItemObjects[currentIndex]);
      } else {
        return;
      }
    }
    this._currentToggleItemObjectsArray = currentToggleItemObjects;

    this._openStatus = false;

    if (this._toggleAllElement) {
      this._toggleAllElement.classList.remove('is-open');
      $(this._toggleAllElement)
        .off('click')
        .on('click', this.toggleAllItems.bind(this));
    }
  }

  toggleAllItems() {
    for (var i = 0; i < this._currentToggleItemObjectsArray.length; i++) {
      if (!this._openStatus) {
        this._currentToggleItemObjectsArray[i].openText();
        this._toggleAllElement.classList.add('is-open');
      } else {
        this._currentToggleItemObjectsArray[i].closeText();
        this._toggleAllElement.classList.remove('is-open');
      }
    }
    this._openStatus = !this._openStatus;
  }
}
