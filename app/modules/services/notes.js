'use strict';

angular.module('notes.notesService', [])

.factory('notesService', ['$rootScope', '$q', '$localStorage', function($rootScope, $q, $localStorage) {

    var notes = this;

    notes.$storage = $localStorage;
    notes.lastId = 0;

    notes.init = function() {

        notes.loadConfiguration();
        notes.loadGroups();
        notes.loadNotes();

        // Check for existing Configuration
        if (!notes.config) {
            notes.config = {
                default_group: 0,
                no_group_name: "Group-less",
                show_images: true,
                last_note_on_load: true
            }

            notes.storeConfiguration();
        }
        // Check for existing Groups
        if (!notes.groups) {
            notes.groups = [{
                id: 0,
                name: notes.config.no_group_name,
                order: 1
            }, {
                id: 2,
                name: "Personal",
                order: 2
            }, {
                id: 3,
                name: "Work",
                order: 3
            }];

            notes.storeGroups();
        }
        // Check for existing Notes
        if (!notes.notes) {
            notes.notes = [{
                id: 1,
                title: "Hello World!",
                subtitle: "This is my first note!",
                body: "I can write whatever I want here! :)",
                due_date: new Date(),
                closed: 0,
                group: 0,
                favorite: 1,
                date_created: new Date(),
                date_updated: new Date(),
                date_deleted: false
            }, {
                id: 2,
                title: "Hello Work!",
                subtitle: "Something more professionaly",
                body: "Work needs to be done as well. This can be stored under its own category!",
                due_date: new Date(),
                closed: 0,
                group: 3,
                favorite: 0,
                date_created: new Date(),
                date_updated: new Date(),
                date_deleted: false
            }]

            notes.storeNotes();
        }

        notes.lastId = notes.notes[notes.notes.length - 1].id;

        console.log('Application loaded..');
        console.log(' - Config: ' + notes.config.length);
        console.log(' - Groups: ' + notes.groups.length);
        console.log(' - Notes: ' + notes.notes.length);
        console.log(' - Last note: ' + notes.lastId);
    }

    notes.newNote = function() {
        notes.lastId += 1;

        return {
            id: notes.lastId,
            title: "",
            subtitle: "",
            body: "",
            due_date: "",
            closed: 0,
            group: 0,
            favorite: 0,

            date_created: new Date(),
            date_updated: new Date(),
            date_deleted: false
        }
    }

    notes.loadConfiguration = function() {
        notes.config = notes.$storage.config;
    }
    notes.storeConfiguration = function(config) {
        notes.$storage.config = notes.config;

    }

    notes.loadGroups = function() {
        notes.groups = notes.$storage.groups;
    }
    notes.storeGroups = function() {
        notes.$storage.groups = notes.groups;
    }

    notes.loadNotes = function() {
        notes.notes = notes.$storage.notes;
    }
    notes.storeNotes = function() {
        notes.$storage.notes = notes.notes;
    }

    return notes;
}]);