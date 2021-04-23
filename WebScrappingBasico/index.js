const puppeteer = require('puppeteer');
const fs = require('fs');

//Função auto excutavel
(async () => {

    const browser = await puppeteer.launch({ headless: true });//Abre o navegador
    const page = await browser.newPage();
    await page.setViewport({ //aumenta a resolução do print
        width: 1920,
        height: 1080
    })
    await page.goto('https://www2.ufjf.br/ufjf/');
    await page.screenshot({ path: 'print.png' });

    //Bot para pegar imgs em um site exemplo
    /*
    const imgList = await page.evaluate(() => {
        //toda essa função sera executada no browser

        // vamos pegar todas as imagens que estao na parte de posts

        // transformar o NodeList em array

        // transformar os elementos(html) em objetos JS

        // colocar para fora da Função

        const nodeList = document.querySelectorAll('article img');
        const imgArray = [...nodeList];
        const imgList = imgArray.map(({ src }) => ({
            src
        }))
        return imgList;
    });

    // escrever os dados em um arquivo local (json);
    fs.writeFileSync('instagram.json', JSON.stringify(imgList, null, 2), err => {
        if (err) throw new Error('Deu erro aqui cara');

        console.log('Boa Cara')
    })
    */
    await browser.close();
})();