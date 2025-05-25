const BasePage = require('./base.page');

class CareersPage extends BasePage {
    constructor(page) {
        super(page, '/careers');
    }

    get keywordField() {
        return this.page.locator('css=#new_form_job_search-keyword');
    }

    get locationDropdown() {
        return this.page.locator('css=span.selection');
    }

    location(name) {
        return this.page.locator(`xpath=//li[@title=\'${name}\']`);
    }

    get remoteCheckbox() {
        return this.page.locator('xpath=//label[normalize-space(text())=\'Remote\']');
    }

    get findButton() {
        return this.page.locator('xpath=//button[@type=\'submit\']');
    }
}

module.exports = CareersPage;