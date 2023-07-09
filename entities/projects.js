const connect = require('../connect/connect-database').connect
const sequelize = require('../connect/connect-database').sequelize
const log = require('../log/logging').logger
class Projects {
    get projects() {
        return connect.define("projects",
            {
                project_name: {
                    type: sequelize.STRING ,
                    primaryKey: true
                } ,
                project_cost: {
                    type: sequelize.DOUBLE
                } ,
                project_build: {
                    type: sequelize.DATE
                }
                ,
                project_status: {
                    type: sequelize.BOOLEAN
                }
                ,
                p_id : {
                    type : sequelize.INTEGER ,
                    references: { // setting details foreign key field
                        model: 'header_programmers', // map this field to table
                        key: 'p_id' // reference of this field
                    }
                }
                ,
                s_id : {
                    type : sequelize.INTEGER ,
                    references: { // setting details foreign key field
                        model: 'header_sales', // map this field to table
                        key: 's_id' // reference of this field
                    }
                }
                ,
                m_id : {
                    type :sequelize.INTEGER ,
                    references: { // setting details foreign key field
                        model: 'header_marketings', // map this field to table
                        key: 'm_id' // reference of this field
                    }
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

module.exports = new Projects().projects