import Breakpoint from './breakpoint';

class BreakpointEmitter {
  constructor(attachObject, eventName, breakpoint = new Breakpoint()) {
    this.breakpoint = breakpoint;
    this.attachObject = attachObject;
    this.eventName = eventName;

    this.screenWidth = window.innerWidth;
    this.breakpointEventObj = {
      size: window.innerWidth,
      type: this.breakpoint.getScreenType(),
      breakpoint: this.breakpoint
    };
    this.init();
  }

  init() {
    window.addEventListener('resize', e => {
      this.screenWidth = e.target.innerWidth;
      this.currentType = this.breakpoint.getScreenType();

      if (this.currentType != this.breakpointEventObj.type) {
        const breakpointEvent = new CustomEvent(this.eventName, {
          detail: this.breakpointEventObj
        });
        this.breakpointEventObj.size = this.screenWidth;
        this.breakpointEventObj.type = this.currentType;
        this.attachObject.dispatchEvent(breakpointEvent);
      }
    });
  }
}

export default BreakpointEmitter;
