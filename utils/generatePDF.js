const pdfkit = require('pdfkit');
const { Base64Encode } = require('base64-stream');
const axios = require('axios');
const imagekit = require('./imagekit');

function uploadPdf(file, fileName) {
    return new Promise(async (resolve, reject) => {
        try {
            const uploadedFile = await imagekit.upload({
                file,
                fileName: fileName
            });

            const data = {
                title: uploadedFile.name,
                url: uploadedFile.url,
                path: uploadedFile.filePath
            };

            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

const dateConvert = (strDate) => {
    return new Date(strDate).toString().replace(' (Western Indonesia Time)', '');
}

let indIDR = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
});

async function fetchImage(src) {
    const image = await axios
        .get(src, {
            responseType: 'arraybuffer'
        })
    return image.data;
}

const generateContent = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            data.transactionData.transaction_time = dateConvert(data.transactionData.transaction_time);
            data.transactionData.paid_time = dateConvert(data.transactionData.paid_time);
            data.scheduleData.cost = indIDR.format(data.scheduleData.cost);
            data.scheduleData.departure_time = dateConvert(data.scheduleData.departure_time);
            data.scheduleData.arrival_time = dateConvert(data.scheduleData.arrival_time)
    
            const appLogo = "./public/images/flytick.png";
            const fontRegular = 'Helvetica';
            const fontBold = 'Helvetica-Bold';
            const fSize = {
                s: 8,
                p: 11,
                h: 13,
            };
    
            const left = {
                start: 60,
                width: 200,
            };
    
            const right = {
                start: 350,
                width: 200
            };
            
            let pdfDoc = new pdfkit();
            // let stream = fs.createWriteStream(fileName);
            // pdfDoc.pipe(stream);
            // let base64String = '';
            // let stream = pdfDoc.pipe(new Base64Encode());
    
            pdfDoc.fontSize(fSize.s).text("Flight E-Ticket", 5, 45, {align: 'center', width: 600});
    
            pdfDoc.image(appLogo, left.start, 60, {height: 35});
    
            pdfDoc.font(fontBold).fontSize(fSize.p).text('FlyTick App', left.start, 100);
    
            pdfDoc.font(fontRegular).text("Ticket Number", right.start, 65, {width: right.width, align: 'right'});
            pdfDoc.fontSize(fSize.h).text(data.ticketData.ticket_number, right.start, 80, {width: right.width, align: 'right'});
            pdfDoc.text(data.flightData.class, right.start, 95, {width: right.width, align: 'right'});
    
            pdfDoc.font(fontBold).fontSize(fSize.p).text("Order Detail", left.start, 140, {width: left.width});
            pdfDoc.font(fontRegular).text(`Payment date: ${data.transactionData.paid_time}`, left.start, 155, {width: left.width});
            pdfDoc.text(`Invoice number: ${data.transactionData.invoice_number}`, left.start, 180, {width: left.width});
            pdfDoc.text(`Total payment: ${data.scheduleData.cost}`, left.start, 195, {width: left.width});
    
            pdfDoc.font(fontBold).text("Buyer Detail", right.start, 140, {width: right.width});
            pdfDoc.font(fontRegular).text(`Name: ${data.userData.name}`, right.start, 155, {width: right.width});
            pdfDoc.text(`Email: ${data.userData.email}`, right.start, 170, {width: right.width});
    
            pdfDoc.rect(left.start, 230, 300, 40).stroke("#b1b1b1");
            pdfDoc.rect(left.start + 300, 230, 190, 40).stroke("#b1b1b1");
    
            pdfDoc.fontSize(fSize.s).text('Flight No.', left.start + 10, 240, {width: 280, align: 'left'});
            pdfDoc.fontSize(fSize.h).text(`${data.flightData.code} / ${data.flightData.class}`, left.start + 10, 245, {width: 280, align: 'right'});
    
            pdfDoc.fontSize(fSize.s).text('Seat No.', left.start + 310, 240, {width: 170, align: 'left'});
            pdfDoc.fontSize(fSize.h).text(`${data.ticketData.seat_number} / ${data.ticketData.type}`, left.start+310, 245, {width: 170, align: 'right'});
    
            pdfDoc.rect(left.start, 270, 200, 130).stroke("#b1b1b1");
            pdfDoc.rect(left.start + 200, 270, 290, 130).stroke("#b1b1b1");
    
            pdfDoc.fontSize(fSize.s).text('Passenger Data', left.start + 10, 280, {width: 180, align: 'right'});
            pdfDoc.text('Name', left.start + 10, 300, {width: 180, align: 'left'});
            pdfDoc.text('NIK', left.start + 10, 320, {width: 180, align: 'left'});
            pdfDoc.text('Telp.', left.start + 10, 340, {width: 180, align: 'left'});
            pdfDoc.text('Passport No.', left.start + 10, 360, {width: 180, align: 'left'})
            pdfDoc.fontSize(fSize.p).text(`${data.passengerData.name}`, left.start + 10, 300, {width: 180, align: 'right'});
            pdfDoc.text(`${data.passengerData.nik}`, left.start + 10, 320, {width: 180, align: 'right'});
            pdfDoc.text(`${data.passengerData.telp}`, left.start + 10, 340, {width: 180, align: 'right'});
            pdfDoc.text(`${(data.passengerData.no_passport) != null ? data.passengerData.no_passport : '-'}`, left.start + 10, 360, {width: 180, align: 'right'});
    
            pdfDoc.fontSize(fSize.s).text('Flight Detail', left.start + 210, 280, {width: 270, align: 'right'});
            pdfDoc.text('Departure', left.start + 210, 300, {width: 270});
            pdfDoc.fontSize(fSize.p).text(`${data.fromAirportData.name} (${data.fromAirportData.code})`, left.start + 210, 315, {width: 270});
            pdfDoc.text(`${data.scheduleData.departure_time}`, left.start + 210, 330, {width: 270});
            pdfDoc.fontSize(fSize.s).text('Arrival', left.start + 210, 350, {width: 270});
            pdfDoc.fontSize(fSize.p).text(`${data.toAirportData.name} (${data.toAirportData.code})`, left.start + 210, 365, {width: 270});
            pdfDoc.text(`${data.scheduleData.arrival_time}`, left.start + 210, 380, {width: 270});
    
            pdfDoc.fontSize(fSize.s).font(fontBold).text('Scan here for check in', 60, 440);
    
            const img = await fetchImage(data.ticketData.qr_code);
            pdfDoc.image(img, 60, 450, {height: 200});
    
            pdfDoc.end();

            const base64String = await toBase64(pdfDoc);
            
            return resolve(base64String);
        } catch (err) {
            console.log("Error occured ", err);
        }
    })
}

const toBase64 = (doc) => {
    return new Promise((resolve, reject) => {
        try {
            const stream = doc.pipe(new Base64Encode());

            let base64Value = '';
            stream.on('data', chunk => {
                base64Value += chunk;
            });
            
            stream.on('end', () => {
                resolve(base64Value);
            });
        } catch (e) {
            reject(e);
        }
    });
};

const generatePDF = async (datatogenerate) => {
    try {
        const data = JSON.parse(datatogenerate);
        const fileName = data.ticketData.ticket_number;
        const file = await generateContent(data);
        const dataupload = await uploadPdf(file, fileName);
        return dataupload;
    } catch (err) {
        console.log(err);
    }
}

module.exports = generatePDF;