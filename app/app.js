'use strict';

// Declare app level module which depends on views, and components
angular.module('notes', [
    'ngRoute',
    'ngMaterial',
    'ngMdIcons',
    'ngStorage',
    'notes.notesService',
    'notes.header',
    'notes.notes'
]).
config(['$locationProvider', '$routeProvider', '$localStorageProvider', function($locationProvider, $routeProvider, $localStorageProvider) {
    $locationProvider.hashPrefix('!');

    $localStorageProvider.setKeyPrefix('lmn.v1-');

    $routeProvider.otherwise({ redirectTo: '/notes' });
}]).
run(['notesService', function(notesService) {

    notesService.init();

}]);