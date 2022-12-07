module.exports = {
    register: {
        name: 'string',
        email: 'email',
        password: 'string|min:8',
        role: { type: 'string', enum: ['user', 'admin'], optional: true }
    }
}