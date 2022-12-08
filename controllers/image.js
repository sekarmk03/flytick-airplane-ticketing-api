const { Image } = require('../models');
const imagekit = require('../utils/imagekit');

module.exports = {

    index: async (req, res, next) => {
        try {
            const image = await Image.findAll({raw: true});
            return res.status(200).json({
                status: true,
                message: 'get all images success',
                data: image
            })
        } catch (err) {
            next(err);
        }
    },

    show: async (req, res, next) => {
        try {
            const {id} = req.params;
            const image = await Image.findOne({where: {id: id}});
            if(!image) {
                return res.status(400).json({
                    status: false,
                    message: 'image not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get image success',
                data: image.get()
            });
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const image = req.file.buffer.toString('base64');

            const uploadImage = await imagekit.upload({
                file: image,
                fileName: req.file.originalname
            });

            const newImage = await Image.create({
                filename: uploadImage.name,
                imagekit_id: uploadImage.fileId,
                imagekit_url: uploadImage.url,
                imagekit_path: uploadImage.filePath
            });

            return res.status(201).json({
                status: true,
                message: 'image created',
                data: newImage
            });
        } catch (err) {
            next(err);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const image = req.file.buffer.toString('base64');
            
            const imageData = await Image.findOne({where: {id: id}});
            if(!imageData) {
                return res.status(400).json({
                    status: false,
                    message: 'image not found',
                    data: null
                });
            }

            if (imageData.imagekit_id != 'oauth-image' && imageData.imagekit_id != 'default-image') {
                await imagekit.deleteFile(imageData.imagekit_id);
            }

            const uploadNewImage = await imagekit.upload({
                file: image,
                fileName: req.file.originalname
            });

            await Image.update({
                imagekit_id: uploadNewImage.fileId,
                imagekit_url: uploadNewImage.url,
                imagekit_path: uploadNewImage.filePath
            },{
                where: {id: imageData.id}
            });

            return res.status(200).json({
                status: true,
                message: 'update image success',
                data: isUpdated
            });
        } catch (err) {
            next(err);
        }
    },

    // ini juga keknya ga dipake
    delete: async (req, res, next) => {
        try {
            const {id} = req.params;

            const image = await Image.findOne({where: {id: id}});
            if(!image) {
                return res.status(400).json({
                    status: false,
                    message: 'image not found',
                    data: null
                });
            }

            if (image.imagekit_id != 'oauth-image' && image.imagekit_id != 'default-image') {
                await imagekit.deleteFile(image.imagekit_id);
            }

            const isDeleted = await Image.destroy({
                where: {id: id}
            });

            return res.status(201).json({
                status: true,
                message: 'delete image success',
                data: isDeleted
            });
        } catch (err) {
            next(err);
        }
    }

}