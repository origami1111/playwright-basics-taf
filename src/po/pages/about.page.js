const BasePage = require('./base.page');

class AboutPage extends BasePage {
    constructor(page) {
        super(page, '/about');
    }

    get downloadButton() {
        return this.page.locator('xpath=//a/span[contains(.,\'DOWNLOAD\')]');
    }
}

module.exports = AboutPage;