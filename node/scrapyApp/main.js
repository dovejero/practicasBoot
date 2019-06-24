const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://www.madrid.es/portales/munimadrid/es/Inicio/Buscador?vgnextoid=d4cade31bd2ac410VgnVCM100000171f5a0aRCRD&vgnextchannel=d4cade31bd2ac410VgnVCM100000171f5a0aRCRD&action=es.iam.portlet.buscador.SearchAction&advanced=true&type=EntidadesYOrganismos&q=parques&hq=more%3Apagemap%3Ametatags-wt.cg_s%3AEntidadesYOrganismos';


(async function () {

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();

    await page.goto(url)
    await page.waitForSelector('.search_result_container')
    // Realiza Pantallazo
    // await page.screenshot({ path: 'example.png' });
    // AXIOS en este caso trae toda la página que haya en url
    // let response = await axios.get(url)

    let busqueda = await page.$$('li.result-container')
    let hrefParques = [];
    let objetoParques = {}
    let datosParques = []
    for (let i = 0; i < busqueda.length; i++) {
        let href = await busqueda[i].$eval('a', a => {
            return a.href.trim();
        })
        // console.log(href)
        hrefParques.push(href)
    }
    // console.log(busqueda.length);
    for (let i = 0; i < hrefParques.length; i++) {
        await page.goto(hrefParques[i]);
        await page.waitForSelector('.container')
        const nombre = await page.$eval('h3.summary-title', h3 => {
            return h3.innerText.trim();
        })
        const descripcion = await page.$eval('.tiny-text', div => {
            return div.innerText.trim();
        })
        const imagen = await page.$eval('.mainContent img:first-child', img => {
            return img.src.trim();
        })
        const calle = await page.$eval('.adr dd', dd => {
            return dd.innerText.trim();
        })

        objetoParques.nombre = nombre;
        objetoParques.descripcion = descripcion;
        objetoParques.imagen = imagen;
        objetoParques.calle = calle;

        if ((await page.$eval('dl.adr dt:last-of-type', dt => dt.innerText.trim())).toLowerCase().startsWith('barrio')) {
            objetoParques.barrio = await page.$eval('dl.adr dd:last-of-type', dd => dd.innerText.trim().toLowerCase())
        } else {
            objetoParques.barrio = 'N/A'
        }

        // const comoLlegar = await page.$eval('#comoLlegar .tiny-text', div => {
        //     return div.innerText.trim();
        // })

        // objetoParques.comoLlegar = comoLlegar;
        // const servicios = await page.$eval('#servicios .tiny-text ul', ul => {
        //     return ul.innerText.trim();
        // })
        // const prueba = servicios.split('\n')

        // objetoParques.servicios = prueba;

        let servicios = await page.$$('#servicios .tiny-text ul li')
        objetoParques.servicios = []
        for (let i = 0; i < servicios.length; i++) {
            let serv = await page.evaluate(elem => elem.textContent.trim(), servicios[i])
            objetoParques.servicios.push(serv)
        }
        datosParques.push(objetoParques);
        console.log(objetoParques);
        await page.waitFor(2000);
    }
    await browser.close();
})();