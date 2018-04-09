(function () {
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url)
                .then(function (response) {
                    const {data} = response
                    vm.billingCycle = {}
                    vm.billingCycles = data

                })
        }

        vm.create = function () {
            $http.post(url, vm.billingCycle)
                .then(function (response) {
                    vm.refresh()
                    msgs.addSuccess('Operação realizada com sucesso!')
                })
                .catch(function (response) {
                    const {data} = response
                    msgs.addError(data.errors)
                })
        }

        vm.refresh()
    }
})()