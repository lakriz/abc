// TODO: refactor - use this helper with other molecules and atoms too
// NOTE: slice is here to transform NodeList into Array
export default selector =>
  Array.prototype.slice.call(document.querySelectorAll(selector));
