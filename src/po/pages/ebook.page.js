const BasePage = require('./base.page');

class EBookPage extends BasePage {
    constructor(page) {
        super(page, '/insights/ebook');
    }

    get articleTitle() {
        return this.page.locator('css=p.scaling-of-text-wrapper');
    }
}

module.exports = EBookPage;