const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
    await page.setViewport({ //aumenta a resolução do print
        width: 1920,
        height: 1080
    });
    await page.goto('https://programathor.com.br/users/sign_in');
    await page.waitFor('input[name="user[email]"]');
    await page.type('input[name="user[email]"]', 'SEU EMAIL', { delay: 100 });  //aparece determinado component
    await page.type('input[name="user[password]"]', 'SUA SENHA', { delay: 100 });
    await page.keyboard.press('Enter');




    //Clicar no botão de vagas
    await page.waitFor('strong');
    await page.click('strong');

    //Pesquisar por vagas em SÃO PAULO
    await page.waitFor('input[name=place]');
    await page.type('input[name=place]', 'São Paulo', { delay: 100 });
    await page.keyboard.press('Enter');

    await page.screenshot({ path: 'cosultaDEvagas.png', fullPage: true });


})();