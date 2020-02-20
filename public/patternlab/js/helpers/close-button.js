import $ from 'jquery';

class CloseButton {
  constructor(element) {
    this.element = element;
    this.close = this.close.bind(this);
    this.parent = $(this.element).closest('.js-close');

    this.init();
  }

  init() {
    $(this.element).on('click', this.close);
  }

  close() {
    $(this.parent).hide();
  }
}

function attach(selector = '.js-close-button') {
  $(selector).each((i, e) => {
    new CloseButton(e);
  });
}

export default { attach };
