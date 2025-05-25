const BasePage = require('./base.page');

class SearchPage extends BasePage {
    constructor(page) {
        super(page, '/search');
    }

    get searchResultItems() {
        return this.page.locator('css=a.search-results__title-link');
    }
}

module.exports = SearchPage;