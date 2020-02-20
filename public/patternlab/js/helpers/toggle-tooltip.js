import TooltipContainer from './sources/toggle-tooltip-container';

const exceptComparisonTable = ':not(.c-comparison-table__c-tooltip)';

function attach(selector = '.js-toggle-tooltip') {
  const tooltips = document.querySelectorAll(selector);
  if (tooltips.length > 0) {
    tooltips.forEach(tooltip => {
      const tooltipActive = new TooltipContainer(tooltip);
      tooltipActive.init();
    });

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          const tooltip =
            node.querySelector &&
            node.querySelector(`${exceptComparisonTable}.js-toggle-tooltip`);
          if (tooltip) {
            const tooltipActive = new TooltipContainer(tooltip);
            tooltipActive.init();
          }
        });
      });
    });

    observer.observe(document, { childList: true, subtree: true });
  }
}

export default { attach };
