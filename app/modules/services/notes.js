'use strict';

angular.module('notes.notesService', [])

.factory('notesService', ['$rootScope', '$q', '$localStorage', function($rootScope, $q, $localStorage) {

    var notes = this;

    notes.$storage = $localStorage;

    notes.init = function() {

        notes.loadConfiguration();
        notes.loadNotes();

        // Check for existing stuffs
        if (!notes.config) {
            notes.config = {
                default_group: 0,
                no_group_name: "Group-less",
                show_images: true,
                last_note_on_load: true
            }

            notes.storeConfiguration();

            // Create the basic notes
            notes.notes = [{
                    id: 0,
                    name: notes.config.no_group_name,
                    notes: [{
                        id: 1,
                        title: "Hello World!",
                        subtitle: "This is my first note!",
                        body: "I can write whatever I want here! :)",
                        due_date: "",
                        closed: 0,
                        group: 0,
                        favorite: 1,
                        date_created: new Date(),
                        date_updated: new Date()
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
                    notes: [{
                        id: 1,
                        title: "Hello Work!",
                        subtitle: "Something more professionaly",
                        body: "Work needs to be done as well. This can be stored under its own category!",
                        due_date: "",
                        closed: 0,
                        group: 0,
                        favorite: 0,
                        date_created: new Date(),
                        date_updated: new Date()
                    }]
                }
            ]

            notes.storeNotes();
        }
    }

    notes.loadConfiguration = function() {
        notes.config = notes.$storage.config;
    }
    notes.storeConfiguration = function(config) {
        notes.$storage.config = notes.config;

    }

    notes.loadNotes = function() {
        notes.notes = notes.$storage.notes;
    }
    notes.storeNotes = function() {
        notes.$storage.notes = notes.notes;
    }

    return notes;
}]);