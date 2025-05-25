const BaseComponent = require('./base.component');

class SearchComponent extends BaseComponent {
    constructor(page) {
        super(page, 'css=.header-search__field');
    }

    get searchField() {
        return this.rootEl.locator('css=#new_form_search');
    }

    get findButton() {
        return this.rootEl.locator('css=button');
    }
}

module.exports = SearchComponent;