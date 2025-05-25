const BaseComponent = require('./base.component');

class SearchResultComponent extends BaseComponent {
    constructor(page) {
        super(page, 'css=.search-result__list');
    }

    get viewAndApplyButton() {
        return this.rootEl.locator('css=a.button-text');
    }
}

module.exports = SearchResultComponent;