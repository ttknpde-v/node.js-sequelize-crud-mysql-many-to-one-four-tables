const log = require('../log/Logging').logger
const path = require('../log/Logging').path
const dotenv = require('dotenv')
dotenv.config({path: path.resolve('../env/.env')})
class ConnectDatabase {
    get sequelize() {
        // log.info("sequelize method is used")
        return require("sequelize")
    }
    get connect() {
        // log.info("connect method is used")
        return new this.sequelize(
            process.env.SQLX_DATABASE,
            process.env.SQLX_USERNAME,
            process.env.SQLX_PASSWORD,
            {
                // set port & host in this block
                dialect: "mysql",
                host: process.env.SQLX_HOST,
                port: process.env.SQLX_PORT
            }
        ) // ended return
    }
}

/*new ConnectDatabase().connect.authenticate().then(() => {
    log.info('message : connected successfully!!')
}).catch((error) => {
    log.warn('message : failed connect!!')
    throw error
})*/

module.exports = new ConnectDatabase()