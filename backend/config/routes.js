const express = require('express')

module.exports = function (server) {
    const router = express.Router()


    server.use('/api', router)

    //rotas da  API
    const billingCycleService = require('../api/billingCycle/billingCycleService')

    billingCycleService.register(router, '/billingCycles')

    const billingCycleSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingCycleSummaryService.getSummary)
}