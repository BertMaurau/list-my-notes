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

    vm.settings = notesService.config;
    vm.groups = notesService.groups;
    vm.notes = notesService.notes;

    vm.note = vm.notes[notesService.lastId - 1];

    vm.addNote = function($event) {
        // Create a new Note
        var newNote = notesService.newNote();
        vm.notes.push(newNote)
        console.log('Created a new Note..');
        console.log(newNote)

        // Select the newly created Note
        vm.note = vm.notes[newNote.id - 1];
    };

    vm.deleteNote = function() {
        vm.note.date_deleted = new Date();
    }
    vm.toggleNote = function() {
        vm.note.closed = (vm.note.closed) ? 0 : 1;
    }
    return vm;
}]);