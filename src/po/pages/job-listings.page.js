const BasePage = require('./base.page');
const { SearchResultComponent } = require('../components');

class JobListingsPage extends BasePage {
    constructor(page) {
        super(page, '/careers/job-listings');
        this.searchResultComponent = new SearchResultComponent(page);
    }
}

module.exports = JobListingsPage;