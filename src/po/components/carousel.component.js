const BaseComponent = require('./base.component');

class CarouselComponent extends BaseComponent {
  constructor(page) {
    super(page, 'css=.slider.section');
  }

  get rightArrow() {
    return this.rootEl.locator('css=.slider__right-arrow');
  }

  get carouselArticle() {
    return this.rootEl.locator('css=div.text-ui-23 p');
  }

  get readMoreButton() {
    return this.rootEl.locator('css=a');
  }
}

module.exports = CarouselComponent;