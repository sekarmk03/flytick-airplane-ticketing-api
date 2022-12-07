module.exports = {
    createBiodata: {
        email: 'email',
        name: 'string',
        nik: 'string',
        birth_place: 'string',
        birth_date: 'date',
        telp: 'string',
        nationality: 'integer',
        no_passport: { type: 'string', nullable: true },
        issue_date: { type: 'date', nullable: true },
        expire_date: { type: 'date', nullable: true }
    }
}