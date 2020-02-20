/* eslint-disable func-names */
import $ from 'jquery';
import Breakpoint from 'helpers/breakpoint'; // eslint-disable-line
import Accordion from '../../_patterns/base/81-accordion/source/accordion'; // eslint-disable-line

const breakpoint = new Breakpoint();
const urlHash = window.location.hash.substr(1);
const hasStickyProductNav = document.querySelector('.c-product-nav-bar');

function scrollTo(element) {
  const $el = $(element);
  let scrollPos = $el.offset().top;

  if (hasStickyProductNav && !breakpoint.isMobile()) {
    scrollPos -= hasStickyProductNav.offsetHeight;
  }

  $('html, body').animate(
    {
      scrollTop: scrollPos
    },
    1000
  );
}

if (urlHash && document.getElementById(urlHash) != null) {
  let element = document.getElementById(urlHash);
  const isAccordion = element.classList.contains('js-accordion__trigger');
  const isTab = element.classList.contains('c-tabs__label');
  let isAccordionInsideTabs;
  let isTabInsideAccordion;

  if (isTab && breakpoint.isMobile()) {
    const mobileTabID = element.parentNode.getAttribute('data-content-id');
    element = document.getElementById(mobileTabID);
  }

  if (element.closest('.c-accordion')) {
    isTabInsideAccordion =
      element.closest('.c-accordion').classList.contains('c-accordion') &&
      isTab;
  }

  if (element.closest('.c-tabs')) {
    isAccordionInsideTabs =
      element.closest('.c-tabs').classList.contains('c-tabs') && isAccordion;
  }

  if (isAccordion || isTab) {
    window.onload = () => {
      if (isAccordion && !isAccordionInsideTabs) {
        //deep-link accordion element
        const accordionContainer = element.closest('.c-accordion');
        const accordion = new Accordion(accordionContainer, false);

        accordion.toggleItem(element);
        scrollTo(element);
      } else if (isAccordion && isAccordionInsideTabs) {
        //deep-link accordion element inside tab
        let tabsNavElement;

        if (breakpoint.isMobile()) {
          const accordionContainer = element.closest('.c-accordion');
          const accordion = new Accordion(accordionContainer, false);
          tabsNavElement = element.closest('.c-tabs__content-item');

          if (!tabsNavElement.classList.contains('active')) {
            $('.js-tabs')
              .tabs()
              .changeContentOnMobile(tabsNavElement);
          }
          accordion.toggleItem(element);
          scrollTo(element);
        } else {
          const accordionDesktopContainer = element.closest('.c-accordion');
          const accordion = new Accordion(accordionDesktopContainer, false);
          const contentID = element.closest('.c-tabs__content-item').id;
          tabsNavElement = element
            .closest('.c-tabs')
            .querySelector(`[data-content-id="${contentID}"]`)
            .querySelector('.c-tabs__label');

          $('.js-tabs')
            .tabs()
            .changeContentOnDesktop(tabsNavElement);
          accordion.toggleItem(element);
          scrollTo(element);
        }
      } else if (isTab && !isTabInsideAccordion) {
        //deep-link tab element
        if (breakpoint.isMobile()) {
          if (!element.classList.contains('active')) {
            $('.js-tabs')
              .tabs()
              .changeContentOnMobile(element);
          }
          scrollTo(element);
        } else {
          $('.js-tabs')
            .tabs()
            .changeContentOnDesktop(element);
          scrollTo(element.closest('.c-tabs'));
        }
      } else if (isTab && isTabInsideAccordion) {
        //deep-link tab element inside accordion
        const accordionElement = $(
          element.closest('.c-accordion__item-content')
        )
          .siblings()
          .get(0);
        const accordionContainer = element.closest('.c-accordion');
        const accordion = new Accordion(accordionContainer, false);

        accordion.toggleItem(accordionElement);

        if (breakpoint.isMobile()) {
          if (!element.classList.contains('active')) {
            $('.js-tabs')
              .tabs()
              .changeContentOnMobile(element);
          }
          setTimeout(function() {
            scrollTo(element);
          }, 500);
        } else {
          $('.js-tabs')
            .tabs()
            .changeContentOnDesktop(element);
          setTimeout(function() {
            scrollTo(element.closest('.c-tabs'));
          }, 500);
        }
      }
    };
  }
}

window.onhashchange = () => {
  const newHash = window.location.hash.substr(1);

  if (document.getElementById(newHash) != null) {
    let element = document.getElementById(newHash);
    const isAccordion = element.classList.contains('js-accordion__trigger');
    const isTab = element.classList.contains('c-tabs__label');
    let isAccordionInsideTabs;
    let isTabInsideAccordion;

    if (isTab && breakpoint.isMobile()) {
      const mobileTabID = element.parentNode.getAttribute('data-content-id');
      element = document.getElementById(mobileTabID);
    }

    if (element.closest('.c-accordion')) {
      isTabInsideAccordion =
        element.closest('.c-accordion').classList.contains('c-accordion') &&
        isTab;
    }

    if (element.closest('.c-tabs')) {
      isAccordionInsideTabs =
        element.closest('.c-tabs').classList.contains('c-tabs') && isAccordion;
    }

    if (isAccordion && !isAccordionInsideTabs) {
      //hash-change accordion element
      const accordionContainer = element.closest('.c-accordion');
      const accordion = new Accordion(accordionContainer, false);

      if (!element.classList.contains('c-accordion__item--is-active')) {
        accordion.toggleItem(element);
      }
      if (hasStickyProductNav) {
        setTimeout(function() {
          scrollTo(element);
        }, 500);
      }
    } else if (isAccordion && isAccordionInsideTabs) {
      //hash-change accordion element inside tab
      let tabsNavElement;

      if (breakpoint.isMobile()) {
        const accordionContainer = element.closest('.c-accordion');
        const accordion = new Accordion(accordionContainer, false);
        tabsNavElement = element.closest('.c-tabs__content-item');

        if (!tabsNavElement.classList.contains('active')) {
          $('.js-tabs')
            .tabs()
            .changeContentOnMobile(tabsNavElement);
        }

        if (!element.classList.contains('c-accordion__item--is-active')) {
          accordion.toggleItem(element);
        }

        setTimeout(function() {
          scrollTo(element);
        }, 500);
      } else {
        const accordionDesktopContainer = element.closest('.c-accordion');
        const accordion = new Accordion(accordionDesktopContainer, false);
        const contentID = element.closest('.c-tabs__content-item').id;
        tabsNavElement = element
          .closest('.c-tabs')
          .querySelector(`[data-content-id="${contentID}"]`)
          .querySelector('.c-tabs__label');

        $('.js-tabs')
          .tabs()
          .changeContentOnDesktop(tabsNavElement);
        if (!element.classList.contains('c-accordion__item--is-active')) {
          accordion.toggleItem(element);
        }
        setTimeout(function() {
          scrollTo(element);
        }, 500);
      }
    } else if (isTab && !isTabInsideAccordion) {
      //hash-change tab element
      if (breakpoint.isMobile()) {
        if (!element.classList.contains('active')) {
          $('.js-tabs')
            .tabs()
            .changeContentOnMobile(element);
        }
        scrollTo(element);
      } else {
        $('.js-tabs')
          .tabs()
          .changeContentOnDesktop(element);
        scrollTo(element.closest('.c-tabs'));
      }
    } else if (isTab && isTabInsideAccordion) {
      //hash-change tab element inside accordion
      const accordionElement = $(element.closest('.c-accordion__item-content'))
        .siblings()
        .get(0);
      const accordionContainer = element.closest('.c-accordion');
      const accordion = new Accordion(accordionContainer, false);

      if (
        !accordionElement.classList.contains('c-accordion__item--is-active')
      ) {
        accordion.toggleItem(accordionElement);
      }

      if (breakpoint.isMobile()) {
        if (!element.classList.contains('active')) {
          $('.js-tabs')
            .tabs()
            .changeContentOnMobile(element);
        }
        setTimeout(function() {
          scrollTo(element);
        }, 750);
      } else {
        $('.js-tabs')
          .tabs()
          .changeContentOnDesktop(element);
        setTimeout(function() {
          scrollTo(element.closest('.c-tabs'));
        }, 750);
      }
    }
  }
};
