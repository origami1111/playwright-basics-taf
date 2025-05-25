import { test, expect } from '@playwright/test';

const { pages } = require('../po'); 

test.describe('EPAM UI tests', () => {
  test.beforeEach(async ({ page }) => {
    await pages(page, 'main').open();
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle("EPAM | Software Engineering & Product Development Services");
  });

  test('User can search for a position based on criteria', async ({ page }) => {
    // Find a link “Carriers” and click on it
    await pages(page, 'main').header.humburgerMenuButton.click();
    await pages(page, 'main').header.hamburger.item('careers').first().click();
    await expect(page).toHaveURL(/.*careers/);

    // Write the name of any programming language in the field “Keywords” (should be taken from test parameter)
    await pages(page, 'careers').keywordField.fill('Java');
    // Select “All Locations” in the “Location” field (should be taken from the test parameter)
    await pages(page, 'careers').locationDropdown.click();
    await pages(page, 'careers').location('All Locations').click();
    // Select the option “Remote”
    await pages(page, 'careers').remoteCheckbox.click();
    // Click on the button “Find”
    await pages(page, 'careers').findButton.click();
    await expect(page).toHaveURL(/.*careers\/job-listings/);

    // Find the latest element in the list of results
    const lastItemFromTheListOfResults = pages(page, 'jobListings').searchResultComponent.viewAndApplyButton.last();
    await lastItemFromTheListOfResults.scrollIntoViewIfNeeded();

    // Click on the button “View and apply”
    await lastItemFromTheListOfResults.click();
    await expect(page).toHaveURL(/.*careers\/job-listings\/job/);

    // Validate that the programming language mentioned in the step above is on a page
    await expect(pages(page, 'job').jobTitle).toContainText('Java');
  });

  [
    { searchString: 'blockchain' },
    { searchString: 'cloud' },
    { searchString: 'automation' }
  ].forEach(({ searchString }) => { 
      test(`Global search works as expected with ${searchString}`, async ({ page }) => {
      // Find a magnifier icon and click on it
      await pages(page, 'main').header.magnifierIcon.click();

      // Find a search string and put there “BLOCKCHAIN”/”Cloud”/”Automation” (use as a parameter for a test)
      await pages(page, 'main').header.searchComponent.searchField.fill(searchString);

      // Click “Find” button
      await pages(page, 'main').header.searchComponent.findButton.click();
      await expect(page).toHaveURL(/.*search/);

      // Validate that all links in a list contain the word “BLOCKCHAIN”/”Cloud”/”Automation” in the text.
      const searchResults = pages(page, 'search').searchResultItems;
      // Wait for at least one search result to appear
      await expect(searchResults.first()).toBeVisible();

      const titles = await searchResults.allTextContents();
      expect(titles.every(title => title.toLowerCase().includes(searchString))).toBe(true);
    });
  });
  
  test('Validate file download function works as expected', async ({ page }) => {
    // Select “About” from the top menu.
    await pages(page, 'main').header.humburgerMenuButton.click();
    await pages(page, 'main').header.hamburger.item('about').first().click();
    await expect(page).toHaveURL(/.*about/);

    // Scroll down to the “EPAM at a Glance” section.
    await pages(page, 'about').downloadButton.scrollIntoViewIfNeeded();

    // Click on the “Download” button.
    await pages(page, 'about').downloadButton.click();

    // Wait till the file is downloaded.
    const downloadPromise = page.waitForEvent('download');

    // Validate that file “EPAM_Systems_Company_Overview.pdf” downloaded (use the name of the file as a parameter)
    const download = await downloadPromise;
    const fileName = download.suggestedFilename();
    await download.saveAs('C:\\Users\\Viacheslav_Ostrovsky\\Downloads\\' + fileName);
    expect(fileName).toBe('EPAM_Systems_Company_Overview.pdf');
  });

  test('Title of the article matches with title in the carousel', async ({ page }) => {
    // Select “Insights” from the top menu.
    await pages(page, 'main').header.humburgerMenuButton.click();
    await pages(page, 'main').header.hamburger.item('insights').first().click();
    await expect(page).toHaveURL(/.*insights/);

    // Swipe a carousel twice.
    const carousel = pages(page, 'insights').carousel.rightArrow.first();
    await carousel.click({delay: 1000, clickCount: 2});

    // Note the name of the article.
    const carouselArticle = await pages(page, 'insights').carousel.carouselArticle.first().textContent();

    // Click on the “Read More” button.
    await pages(page, 'insights').carousel.readMoreButton.nth(5).click();
    await expect(page).toHaveURL(/.*insights\/ebook/);

    // Validate that the name of the article matches with the noted above.
    const articleTitle = await pages(page, 'ebook').articleTitle.nth(4).textContent();
    expect(carouselArticle).toContain(articleTitle);
  });
});