'use strict';

angular.module('notes.notes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/notes', {
        templateUrl: 'modules/notes/notes.html',
        controller: 'NotesCtrl as vm'
    });
}])

.controller('NotesCtrl', [function() {
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

    vm.settings = {
        default_group: 0,
        no_group_name: "Group-less",
        show_images: true,
        last_note_on_load: true
    }
    vm.notes = [{
            id: 0,
            name: vm.settings.no_group_name,
            notes: [{
                id: 1,
                title: "Note 1",
                subtitle: "Subtitle 1",
                body: "Body 1",
                due_date: "",
                closed: 1,
                group: 0,
                favorite: 1,
                date_created: "",
                date_updated: ""
            }, {
                id: 2,
                title: "Note 2",
                subtitle: "Subtitle 2",
                body: "Body 2",
                due_date: "",
                closed: 0,
                group: 0,
                favorite: 0,
                date_created: "",
                date_updated: ""
            }, {
                id: 3,
                title: "Note 3",
                subtitle: "Subtitle 3",
                body: "Body 3",
                due_date: "",
                closed: 0,
                group: 0,
                favorite: 1,
                date_created: "",
                date_updated: ""
            }]
        },
        {
            id: 1,
            name: "Personal",
            notes: []
        },
        {
            id: 2,
            name: "Work",
            notes: []
        }
    ]


    vm.addNote = function($event) {
        console.log('Add pls');

    };
    return vm;
}]);