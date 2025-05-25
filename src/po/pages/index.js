const AboutPage = require('./about.page');
const CareersPage = require('./careers.page');
const EBookPage = require('./ebook.page');
const InsightsPage = require('./insights.page');
const JobListingsPage = require('./job-listings.page');
const JobPage = require('./job.page');
const MainPage = require('./main.page');
const SearchPage = require('./search.page');

/**
 * 
 * @param name {'about' | 'careers' | 'ebook' | 'insights' | 'jobListings' | 'job' | 'main' | 'search'} 
 * @returns { AboutPage | CareersPage | EBookPage | InsightsPage | JobListingsPage | JobPage | MainPage | SearchPage }
 */

function pages(page, name) {
    const items = {
        about: new AboutPage(page),
        careers: new CareersPage(page),
        ebook: new EBookPage(page),
        insights: new InsightsPage(page),
        jobListings: new JobListingsPage(page),
        job: new JobPage(page),
        main: new MainPage(page),
        search: new SearchPage(page)
    }

    return items[name];
}

module.exports = {
    pages,
    MainPage,
    CareersPage,
    JobListingsPage,
    JobPage,
    SearchPage,
    AboutPage,
    InsightsPage,
    EBookPage
};