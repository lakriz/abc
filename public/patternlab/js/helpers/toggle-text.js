import ToggleItem from './sources/toggle-item';
import ToggleContainerItem from './sources/toggle-container-item';
import ToggleItemResize from './sources/toggle-item-resize';

function attach(
  selector = '.js-toggle-text',
  maxHeight = 42,
  toggleAllSelector = '.js-toggle-all-texts',
  containerSelector = '.js-toggle-text-container'
) {
  const toggleItems = document.querySelectorAll(selector);
  var toggleItemObjects = [];

  for (var i = 0; i < toggleItems.length; i++) {
    new ToggleItemResize(toggleItems[i]);
    toggleItemObjects.push(new ToggleItem(toggleItems[i], maxHeight));
  }

  const toggleContainer = document.querySelectorAll(containerSelector);

  for (var i = 0; i < toggleContainer.length; i++) {
    new ToggleContainerItem(
      toggleContainer[i],
      selector,
      toggleAllSelector,
      toggleItemObjects
    );
  }
}

export default { attach };
