class Logging {
    get winston() {
        const {createLogger,format,transports} = require('winston')
        return {createLogger,format,transports}
    }
    get path() {
        return require('path')
    }
    get logger() { // this function return Logger class
        return this.winston.createLogger({
            level: 'silly',
            format: this.winston.format.combine(
                this.winston.format.label({label: this.path.basename(process.mainModule.filename)}),
                this.winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                this.winston.format.printf(info => `${info.timestamp} ${info.level} [${info.label}] : ${info.message}`)
            ),
            transports: [
                new this.winston.transports.Console
            ]
            // this is order logger { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
        })
    }
}

module.exports = new Logging()