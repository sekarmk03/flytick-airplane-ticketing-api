module.exports = {
    createUser: {
        name: 'string',
        email: 'email',
        password: 'string|min:8',
        role: { type: 'string', enum: ['user', 'admin'], optional: true },
        balance: {type: 'number', optional: true}
    },

    updateUser: {
        name: {type: 'string', optional: true},
        email: {type: 'email', optional: true},
        role: { type: 'string', enum: ['user', 'admin', 'superadmin'], optional: true},
        balance: {type: 'number', optional: true, nullable: true}
    }
}