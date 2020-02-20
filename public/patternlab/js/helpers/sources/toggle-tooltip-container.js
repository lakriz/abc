/*
 * js-tooltip-adaptable     - for auto position adaptable on tooltip
 * js-tooltip-fix-overflow  - fix overflow issue on tooltip when use with table.
 */
import $ from 'jquery';
import MobileDetect from 'mobile-detect';
import Breakpoint from '../breakpoint';
import TooltipInBound from './tooltip-inbound';

const tooltipLinkClass = '.js-toggle-tooltip__link';
const tooltipClass = '.c-tooltip__item';
const closeToolTipClass = '.js-tooltip-close';
const toggleIconClass = '.js-toggle-icon';
const tooltipAdaptableClass = 'js-tooltip-adaptable';
const tooltipFixOverflow = 'js-tooltip-fix-overflow';
const tooltipEditable = 'c-tooltip__item--editable';

export default class TooltipContainer {
  constructor(element, index) {
    this.md = new MobileDetect(window.navigator.userAgent);
    this._element = element;
    this.index = index;
    this.positionClasses = {
      top: 'c-tooltip--top',
      left: 'c-tooltip--left',
      right: 'c-tooltip--right',
      bottom: false
    };

    this.closeTooltipOnSwiperSlide = this.closeTooltipOnSwiperSlide.bind(this);
  }

  init() {
    this.breakpoint = new Breakpoint();
    this._toggleTooltipLink = this._element.querySelector(tooltipLinkClass);
    this._tooltip = this._element.querySelector(tooltipClass);

    // Check for type of tooltip
    this.isAdaptableTooltip = this._element.classList.contains(
      tooltipAdaptableClass
    );
    this.isOverflowFixTooltip = this._element.classList.contains(
      tooltipFixOverflow
    );
    this.isEditableTooltip = this._tooltip.classList.contains(tooltipEditable);
    this.initPosition = this.currentPosition;

    // Clone tooltip to the body and change reference of _tooltip to the clone
    // Add DOM Observer incase this is inside smooth scroll
    if (this.isOverflowFixTooltip) {
      this.cloneToBody();
    }

    this._closeTooltip = this._tooltip.querySelector(closeToolTipClass);
    this.$toggleIcon = $(toggleIconClass, $(this._toggleTooltipLink).parent());

    if (this.isEditableTooltip) {
      this.toggleTooltip = this.toggleEditableTooltip.bind(this);
    } else {
      this.toggleTooltip = this.toggleTooltip.bind(this);
    }

    if (this.isAdaptableTooltip) {
      this.tooltipInbound = new TooltipInBound(this._tooltip);
      this.findPosition();
    }

    if (this.md.phone() || this.md.tablet()) {
      document.addEventListener('touchstart', this.toggleTooltip, {
        passive: false
      });
    } else {
      document.addEventListener('mousedown', this.toggleTooltip);
      document.addEventListener('pointerdown', this.toggleTooltip);
    }

    document.addEventListener('click', event => {
      const elem = event.target;
      if (elem.classList.contains('js-toggle-tooltip__link')) {
        event.stopPropagation();
        event.preventDefault();
      }
    });
    document.addEventListener('keydown', this.toggleTooltip);
    window.addEventListener('resize', this.handleResizeEvent.bind(this));
    window.addEventListener('breakpoint', this.closeTooltipOnSwiperSlide);
  }

  // Clone popup tooltip the body of document and change reference of _tooltip to clone element
  cloneToBody() {
    const body = document.querySelector('body');
    const tooltipClone = this._tooltip.cloneNode(true);

    this._tooltipOriginal = this._tooltip;
    this._tooltip = tooltipClone;

    this._cloneContainer = document.createElement('div');
    this._cloneContainer.appendChild(tooltipClone);
    this._cloneContainer.classList.add('c-tooltip--clone');
    this._cloneContainer.classList.add('js-fix-overflow--position-close');

    body.appendChild(this._cloneContainer);
    this.updateCloneContainerClassList();
  }

  // Adjust position of clone container to match with original container
  clonePositionAdjust() {
    const boundingClientRect = this._element.getBoundingClientRect();
    const tooltipElHeight =
      this._cloneContainer.querySelector('.c-tooltip__item').offsetHeight + 24;
    const calculatedSpaceBelow = window.innerHeight - boundingClientRect.bottom;
    const calculatedSpaceAbove = boundingClientRect.top;

    this._cloneContainer.style.width = `${boundingClientRect.width}px`;
    this._cloneContainer.style.height = `${boundingClientRect.height}px`;
    this._cloneContainer.style.top = `${boundingClientRect.top +
      window.pageYOffset}px`;

    // Update Position
    if (!this.breakpoint.isMobile()) {
      this._cloneContainer.style.left = `${boundingClientRect.left +
        window.pageXOffset}px`;
    } else {
      this._cloneContainer.style.left = '50%';
      if (
        tooltipElHeight > calculatedSpaceBelow &&
        tooltipElHeight < calculatedSpaceAbove
      ) {
        this.setPosition(this.positionClasses.top);
      } else {
        this.setPosition(false);
      }
    }

    this.updateCloneContainerClassList();
  }

  // Sync class of original container to the clone one
  updateCloneContainerClassList() {
    const exception = ['c-tooltip--clone', 'js-fix-overflow--position-close'];
    const originalClassList = this._element.classList;
    const cloneContainerClassList = this._cloneContainer.classList;
    const finalClassList = Array.from(cloneContainerClassList)
      .filter(className => exception.includes(className))
      .concat(originalClassList);
    this._cloneContainer.className = finalClassList.join(' ');
  }

  handleResizeEvent() {
    if (this.isAdaptableTooltip) this.findPosition();
    if (
      this.isOverflowFixTooltip &&
      this._cloneContainer.classList.contains('is-open')
    ) {
      this.clonePositionAdjust();
    }
  }

  toggleTooltip(e) {
    const keyCode = e.keyCode;
    const matchedKeys =
      keyCode === 32 ||
      keyCode === 13 ||
      keyCode === undefined ||
      keyCode === 0;
    this.openTooltip(e, matchedKeys);
  }

  toggleEditableTooltip(e) {
    const keyCode = e.keyCode;
    const matchedKeys =
      keyCode >= 48 ||
      keyCode === 32 ||
      keyCode === 13 ||
      keyCode === 16 ||
      keyCode === 8 ||
      keyCode === undefined ||
      keyCode === 0;
    this.openTooltip(e, matchedKeys);
  }

  openTooltip(e, matchedKeys) {
    const keyCode = e.keyCode;
    const tabKey = keyCode === 9;
    let isTooltipEl = e.target === this._toggleTooltipLink;
    let isCloseTooltip = e.target === this._closeTooltip;

    if (!isTooltipEl) {
      isTooltipEl =
        $(e.target).closest(tooltipLinkClass)[0] === this._toggleTooltipLink;
    }

    if (!isCloseTooltip) {
      isCloseTooltip =
        $(e.target).closest(closeToolTipClass)[0] === this._closeTooltip;
    }

    if (isTooltipEl) {
      e.stopPropagation();
    }

    if (isTooltipEl && matchedKeys) {
      if (!this._tooltip.classList.contains('is-open')) {
        // Move tooltip back to correct position and find possible position
        if (this.isOverflowFixTooltip) {
          this._cloneContainer.classList.remove(
            'js-fix-overflow--position-close'
          );
          this.clonePositionAdjust();
        }
        if (this.isAdaptableTooltip) this.findPosition();
      } else if (this.isOverflowFixTooltip) {
        setTimeout(() => {
          this._cloneContainer.classList.add('js-fix-overflow--position-close');
          this._cloneContainer.style.top = 'unset';
        }, 250);
      }
      if (!this.md.phone() && !this.md.tablet()) {
        // chrome update touch event listener passive false by default.
        e.preventDefault();
      }

      this._element.classList.toggle('is-open');
      this._toggleTooltipLink.classList.toggle('has-open-tooltip');
      this._tooltip.classList.toggle('is-open');

      if (this.$toggleIcon.hasClass('c-icon--info-circle')) {
        this.$toggleIcon.removeClass('c-icon--info-circle');
        this.$toggleIcon.addClass('c-icon--info-circle-o');
      } else if (this.$toggleIcon.hasClass('c-icon--info-circle-o')) {
        this.$toggleIcon.removeClass('c-icon--info-circle-o');
        this.$toggleIcon.addClass('c-icon--info-circle');
      }

      if (this.isOverflowFixTooltip) {
        this.clonePositionAdjust();
        this.updateCloneContainerClassList();
      }
    } else if (
      (e.target === this._tooltip || this._tooltip.contains(e.target)) &&
      (matchedKeys || tabKey)
    ) {
      e.stopPropagation();
    } else {
      this.closeTooltip(250);
    }

    if (isCloseTooltip) {
      this.closeTooltip(250);
    }
  }

  closeTooltipOnSwiperSlide() {
    const isOnSwiperSlide =
      $(this._element).parents('.swiper-slide ').length > 0;
    if (isOnSwiperSlide) this.closeTooltip();
  }

  closeTooltip(delay) {
    if (this._tooltip.classList.contains('is-open')) {
      this._tooltip.classList.remove('is-open');
      this._element.classList.remove('is-open');
      this._toggleTooltipLink.classList.remove('has-open-tooltip');

      this._tooltip.setAttribute('aria-hidden', 'true');

      this.$toggleIcon.removeClass('c-icon--info-circle');
      this.$toggleIcon.addClass('c-icon--info-circle-o');

      if (this.isOverflowFixTooltip) {
        setTimeout(() => {
          this._cloneContainer.classList.remove('is-open');
          this._cloneContainer.classList.add('js-fix-overflow--position-close');
          this._cloneContainer.style.top = 'unset';
        }, delay || 0);
      }
    }
  }

  findPosition() {
    const possibleFallback = this.tooltipInbound.getPossibleFallback();
    if (possibleFallback[this.initPosition] === true) {
      this.setPosition(this.positionClasses[this.initPosition]);
    } else {
      this.setPosition(this.getFallBackClass());
    }
  }

  // eslint-disable-next-line consistent-return
  getFallBackClass() {
    const possibleFallback = this.tooltipInbound.getPossibleFallback();

    if (possibleFallback.bottom) {
      return this.positionClasses.bottom;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const key in possibleFallback) {
      // eslint-disable-next-line no-prototype-builtins
      if (possibleFallback.hasOwnProperty(key)) {
        if (possibleFallback[key] === true) {
          return this.positionClasses[key];
        }
      }
    }
  }

  setPosition(positionClass) {
    this.removeAllPosition();
    if (positionClass) this._element.classList.add(positionClass);
  }

  removeAllPosition() {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in this.positionClasses) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.positionClasses.hasOwnProperty(key)) {
        this._element.classList.remove(this.positionClasses[key]);
      }
    }
  }

  get currentPosition() {
    let positionClass = this._element.classList.contains(
      this.positionClasses.top
    )
      ? 'top'
      : false;
    positionClass =
      this._element.classList.contains(this.positionClasses.left) &&
      !positionClass
        ? 'left'
        : positionClass;
    positionClass =
      this._element.classList.contains(this.positionClasses.right) &&
      !positionClass
        ? 'right'
        : positionClass;
    return positionClass || 'bottom';
  }
}
