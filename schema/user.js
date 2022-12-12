module.exports = {
    createUser: {
        name: 'string',
        email: 'email',
        password: 'string|min:8'
    },

    updateUser: {
        name: 'string',
        email: 'email',
        role: { type: 'string', enum: ['user', 'admin', 'superadmin'] },
        balance: 'number'
    }
}