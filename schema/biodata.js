module.exports = {
    createBiodata: {
        email: {optional: true, nullable: true, type: 'email'},
        name: {optional: true, type: 'string'},
        nik: { nullable: true, optional: true, type: 'string' },
        birth_place: { nullable: true, optional: true, type: 'string' },
        telp: { nullable: true, optional: true, type: 'string' },
        nationality: { nullable: true, optional: true, type: 'number' },
        no_passport: { nullable: true, optional: true, type: 'string' },
        issue_date: { nullable: true, optional: true, type: 'string', },
        expire_date: { nullable: true, optional: true, type: 'string' }
    }
}