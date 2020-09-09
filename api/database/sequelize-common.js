const { Sequelize } = require('sequelize')

const {mysqlUrl} = require('./sqlDatabaseInfo')

const sequelize = new Sequelize(mysqlUrl, {
    logging: console.log,
    dialectOptions: {
        multipleStatements: true
    }
})

module.exports = { sequelize }