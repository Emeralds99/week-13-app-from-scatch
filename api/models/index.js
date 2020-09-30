const Sequelize = require('sequelize')
const reelWebMoviesModel = require('./reelWebMovies')

const databaseInfo = require('../database/sqlDatabaseInfo')

const connection = new Sequelize(databaseInfo.database, databaseInfo.username, databaseInfo.password, {host: databaseInfo.host, dialect: databaseInfo.dialect})

const reelWebMovies = reelWebMoviesModel(connection, Sequelize)

module.exports = { reelWebMovies }