const connect = require('../../connect/connect-database').connect
const sequelize = require('../../connect/connect-database').sequelize
const log = require('../../log/logging').logger
class Marketing {
    get marketing() {
        log.info("marketing model is used")
        return connect.define("header_marketings",
            {
                m_id: {
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
module.exports = new Marketing().marketing