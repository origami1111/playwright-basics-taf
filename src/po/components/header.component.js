const BaseComponent = require("./base.component");
const SearchComponent = require('../components/search.component');
const HamburgerComponent = require('../components/hamburger.component');

class HeaderComponent extends BaseComponent {
    constructor(page) {
        super(page, 'css=.header__inner');
        this.hamburger = new HamburgerComponent(page);
        this.searchComponent = new SearchComponent(page);
    }

    get humburgerMenuButton() {
        return this.rootEl.locator('css=.hamburger-menu__button');
    }

    get magnifierIcon() {
        return this.rootEl.locator('css=span.header-search__search-icon');
    }
}

module.exports = HeaderComponent;