class BaseComponent {
  constructor(page, rootSelector) {
    this.page = page;
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return this.page.locator(this.rootSelector);
  }
}

module.exports = BaseComponent;