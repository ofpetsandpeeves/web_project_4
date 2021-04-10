class Section {
  constructor( {items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderElements() {
    this._renderedItems.forEach((element) => {
      this._renderer(element);
    });
  }

  // elements added to DOM
  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
