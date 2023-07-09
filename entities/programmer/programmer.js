const connect = require('../../connect/connect-database').connect
const sequelize = require('../../connect/connect-database').sequelize
const log = require('../../log/logging').logger
class Programmer {
    get programmer() {
        log.info("programmer method is working in Programmer.js")
        return connect.define("header_programmers",
            {
                p_id: {
                    type: sequelize.INTEGER ,
                    primaryKey: true ,
                    autoIncrement: true
                } ,
                fullname: {
                    type: sequelize.STRING
                } ,
                salary: {
                    type: sequelize.DECIMAL
                }
                ,
                level: {
                    type: sequelize.STRING
                }
            } ,
            {
                // freeze name table not using *s on name
                freezeTableName: true ,
                // don't use createdAt/update
                timestamps: false
            }
        );
    } // ended programmer method
}

module.exports = new Programmer().programmer