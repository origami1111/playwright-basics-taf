const BasePage = require('./base.page');

class JobPage extends BasePage {
    constructor(page) {
        super(page, '/careers/job-listings/job');
    }

    get jobTitle() {
        return this.page.locator('css=header h1');
    }
}

module.exports = JobPage;