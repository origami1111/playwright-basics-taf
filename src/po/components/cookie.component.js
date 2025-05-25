const BaseComponent = require('./base.component');

class CookieComponent extends BaseComponent {
    constructor(page) {
        super(page, 'onetrust-banner-sdk');
    }

    get acceptButton() {
        return this.page.locator('#onetrust-accept-btn-handler');
    }

    get cookiesSettingsButton() {
        return this.page.locator('#onetrust-pc-btn-handler');
    }
}

module.exports = CookieComponent;