module.exports = {
    createBiodata: {
        email: 'email',
        name: 'string',
        nik: 'string',
        birth_place: 'string',
        telp: 'string',
        nationality: 'number',
        no_passport: { type: 'string', nullable: true, optional: true }
    }
}