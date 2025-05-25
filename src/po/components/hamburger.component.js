const BaseComponent = require("./base.component");

class HamburgerComponent extends BaseComponent {
    constructor(page) {
        super(page, 'css=.hamburger-menu__list');
    }

    item(param) {
        return this.rootEl.locator(`css=a[href=\'/${param.toLowerCase()}\']`);
    }
}

module.exports = HamburgerComponent;