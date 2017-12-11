'use strict';

// Declare app level module which depends on views, and components
angular.module('notes', [
    'ngRoute',
    'ngMaterial',
    'ngMdIcons',
    'notes.header',
    'notes.notes'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/notes' });
}]);