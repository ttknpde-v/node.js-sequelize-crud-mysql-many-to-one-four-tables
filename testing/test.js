const app = require('../service/service-rest-api').express()
const router = require('../router/router')
const log = require('../log/logging').logger
class Test {
    constructor() {
        app.use('/api-project',router.routerProject)
        app.use('/api-programmer',router.routerProgrammer)
        app.use('/api-sale',router.routerSale)
        app.use('/api-marketing',router.routerMarketing)
        app.listen(5000,function (errors) {
                if (errors) throw errors
                else log.info(`u r in port 5000`)
        })
    }
}

new Test()