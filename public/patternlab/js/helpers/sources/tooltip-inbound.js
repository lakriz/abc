export default class TooltipInBound {
  constructor(element) {
    this._tooltipSpacing = 16;

    if (element) {
      this._element = element;
      this.init();
    }
  }

  init() {
    this._element.style.display = 'block';

    this.top = this._element.offsetTop;
    this.left = this._element.offsetLeft;
    this.width = this._element.offsetWidth;
    this.height = this._element.offsetHeight;

    this.tooltipOffset = this._element.getBoundingClientRect();
    this.parentOffset = this._element.offsetParent.getBoundingClientRect();

    this._element.style.display = '';
  }

  getPossibleFallback() {
    this.init();

    const topCase = () => {
      return (
        this.topSpace > this.height + this._tooltipSpacing &&
        document.documentElement.clientWidth > this.width &&
        this.leftSpace + this.parentOffset.width / 2 > this.width / 2 &&
        this.rightSpace + this.parentOffset.width / 2 > this.width / 2
      );
    };

    const bottomCase = () => {
      return (
        this.bottomSpace > this.height + this._tooltipSpacing &&
        document.documentElement.clientWidth > this.width &&
        this.leftSpace + this.parentOffset.width / 2 > this.width / 2 &&
        this.rightSpace + this.parentOffset.width / 2 > this.width / 2
      );
    };

    const leftCase = () => {
      return (
        this.leftSpace > this.width + this._tooltipSpacing &&
        document.documentElement.clientHeight > this.height &&
        this.bottomSpace > this.height / 2 &&
        this.topSpace > this.height / 2
      );
    };

    const rightCase = () => {
      return (
        this.rightSpace > this.width + this._tooltipSpacing &&
        document.documentElement.clientHeight > this.height &&
        this.bottomSpace > this.height / 2 &&
        this.topSpace > this.height / 2
      );
    };

    const possibleFallback = {
      top: topCase(),
      bottom: bottomCase(),
      left: leftCase(),
      right: rightCase()
    };

    return possibleFallback;
  }

  get topSpace() {
    return this.parentOffset.top;
  }

  get bottomSpace() {
    return (
      document.documentElement.clientHeight -
      this.parentOffset.top -
      this.parentOffset.height
    );
  }

  get leftSpace() {
    return this.parentOffset.left;
  }

  get rightSpace() {
    return (
      document.documentElement.clientWidth -
      (this.parentOffset.left + this.parentOffset.width)
    );
  }
}
