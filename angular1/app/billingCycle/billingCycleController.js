(function () {
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url)
                .then(function (response) {
                    const {data} = response
                    vm.billingCycle = {}
                    vm.billingCycles = data
                    tabs.show(vm, {tabList: true, tabCreate: true})
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

        vm.showTabUpdate = function (billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabUpdate: true})
        }

        vm.showTabDelete = function (billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabDelete: true})
        }

        vm.update = function () {
            const updateUrl = `${url}/${vm.billingCycle._id}`
            $http.put(updateUrl, vm.billingCycle)
                .then((response) => {
                    vm.refresh()
                    msgs.addSuccess('Operação realizada com sucesso')
                })
                .catch(function (response) {
                    const {data} = response
                    msgs.addError(data.errors)
                })
        }

        vm.delete = function () {
            const deleteUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle)
                .then((response) => {
                    vm.refresh()
                    msgs.addSuccess('Operação realizada com sucesso')
                })
                .catch(function (response) {
                    const {data} = response
                    msgs.addError(data.errors)
                })
        }

        vm.refresh()
    }
})()