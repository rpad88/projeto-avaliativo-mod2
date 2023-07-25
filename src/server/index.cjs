const users = require('./users.json')
const pacientes = require('./pacientes.json')
const consultas = require('./consultas.json')

module.exports = () => ({
    users: users,
    pacientes: pacientes,
    consultas: consultas
})