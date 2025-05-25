const BasePage = require('./base.page');
const { CarouselComponent } = require('../components');

class InsightsPage extends BasePage {
    constructor(page) {
        super(page, '/insights');
        this.carousel = new CarouselComponent(page);
    }
}

module.exports = InsightsPage;