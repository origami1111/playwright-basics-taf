const BasePage = require('./base.page');

class MainPage extends BasePage {
    constructor(page) {
        super(page, '/');
    }
}

module.exports = MainPage;