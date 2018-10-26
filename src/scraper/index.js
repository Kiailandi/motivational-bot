const puppeteer = require('puppeteer');
var page;
(async () => {
  const browser = await puppeteer.launch();
  page = await browser.newPage();
})();

module.exports = {
  scrapeImgByUsername: async (userName = 'patroclo94') => {
    await page.goto(`https://www.instagram.com/${userName}`);
    await page.screenshot({ path: 'example.png' });
    const images = await page.$$eval('.FFVAD', els => els.map(el => el.src));
    return images;
  }
};
