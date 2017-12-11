'use strict';

angular.module('notes.notes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/notes', {
        templateUrl: 'modules/notes/notes.html',
        controller: 'NotesCtrl as vm'
    });
}])

.controller('NotesCtrl', ['notesService', function(notesService) {
    var vm = this;

    vm.fabIsOpen = false;

    vm.note = {
        id: 0,
        title: "",
        subtitle: "",
        body: "",
        due_date: "",
        status: 0,
        group: 0,
        date_created: "",
        date_updated: ""
    }

    vm.settings = notesService.config;
    vm.notes = notesService.notes;


    vm.addNote = function($event) {
        console.log('Add pls');

    };
    return vm;
}]);