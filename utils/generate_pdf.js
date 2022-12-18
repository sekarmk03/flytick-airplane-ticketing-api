const puppeteer = require('puppeteer-core');
const path = require('path');
var imagekit = require('./imagekit');
const fs = require('fs');

const compile = async function(template, data){
    const filePath = path.join(process.cwd(), './template/email', `${template}.ejs`);
    const html = await fs.readFile(filePath, 'utf-8');
    return compile(html)(data);
}

function uploadPDF(file) {
    return new Promise(async (resolve, reject) => {
        try {
            const fileName = file.split('/').slice(4).join('-');
            const uploadedFile = await imagekit.upload({
                file,
                fileName: fileName
            });

            const data = {
                title: uploadedFile.name,
                url: uploadedFile.url
            };

            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

const generate_pdf = async (templatePDF, data) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const content = await compile(templatePDF, data)
        await page.setContent(content);
        await page.emulateMediaType(screen);
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: 'true'
        })
        const data = await uploadPDF(pdf);

        return data;
    } catch (err) {
        console.log(err);
        return;
    }
}

module.exports = generate_pdf;