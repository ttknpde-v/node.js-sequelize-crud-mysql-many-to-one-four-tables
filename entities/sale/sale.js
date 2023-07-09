const connect = require('../../connect/connect-database').connect
const sequelize = require('../../connect/connect-database').sequelize
const log = require('../../log/logging').logger
class Sale {
    get sale() {
        return connect.define("header_sales",
            {
                s_id: {
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
    } // ended sale method
}

module.exports = new Sale().sale