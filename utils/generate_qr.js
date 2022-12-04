require('dotenv').config();
const qr = require('qr-image');
var imagekit = require('./imagekit');

function uploadImage(file) {
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

const generate_qr = async (dataToGenerate) => {
    try {
        const buffer = qr.imageSync(dataToGenerate);

        const data = await uploadImage(buffer.toString('base64'));

        return data;
    } catch (err) {
        console.log(err);
        return;
    }
}

module.exports = generate_qr;