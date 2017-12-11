'use strict';

angular.module('notes.header', [])

.controller('HeaderCtrl', ['$mdSidenav', function($mdSidenav) {
    var vm = this;

    vm.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    return vm;
}]);