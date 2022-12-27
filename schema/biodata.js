module.exports = {
    createBiodata: {
        email: {type: 'email', optional: true},
        name: 'string',
        nik: { type: 'string', nullable: true, optional: true },
        birth_place: { type: 'string', nullable: true, optional: true },
        telp: { type: 'string', nullable: true, optional: true },
        nationality: { type: 'number', nullable: true, optional: true },
        no_passport: { type: 'string', nullable: true, optional: true },
        issue_date: { type: 'string', nullable: true, optional: true },
        expire_date: { type: 'string', nullable: true, optional: true }
    }
}