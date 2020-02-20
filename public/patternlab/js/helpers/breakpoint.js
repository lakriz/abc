import config from '../../../patternlab-config.json';

const BREAKPOINT = {
  mobile: config.ishViewportRange.s[1],
  tablet: config.ishViewportRange.m[1]
};

class Breakpoint {
  constructor() {
    this.breakpoint = BREAKPOINT;
    this.screenWidth = window.innerWidth;
  }

  getBreakpointObject() {
    return this.breakpoint;
  }

  getScreenType() {
    this.screenWidth = window.innerWidth;
    return this.screenWidth <= this.breakpoint.mobile
      ? 'mobile'
      : this.screenWidth <= this.breakpoint.tablet
      ? 'tablet'
      : 'desktop';
  }

  isMobile() {
    return this.getScreenType() === 'mobile';
  }

  isTablet() {
    return this.getScreenType() === 'tablet';
  }

  isDesktop() {
    return this.getScreenType() === 'desktop';
  }
}

export default Breakpoint;
