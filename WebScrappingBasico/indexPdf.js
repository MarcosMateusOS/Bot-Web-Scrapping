const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch() // configura o navegador
    const page = await browser.newPage();

    await page.goto('https://playvalorant.com/pt-br//');
    await page.pdf({ path: 'valorantPDF.pdf', format: 'a4' });

    await browser.close();
})();