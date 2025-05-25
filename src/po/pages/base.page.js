const { HeaderComponent } = require('../components');

class BasePage {
    constructor(page, url) {
        this.page = page;
        this.url = url;
        this.header = new HeaderComponent(page);
    }

    async open() {
        await this.page.goto(this.url);
    }
}

module.exports = BasePage;