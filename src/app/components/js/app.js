'use strict';

var App = angular.module('loginApp',['ui.router']);
App.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
        

    
        $stateprovider
            .state('/home', {
                 url: '/',
                controller: 'loginctrl',
                templateUrl: 'views/home.html',
                
            })

            .state('/login', {
                 url: '/login',
                controller: 'loginctrl',
                templateUrl: 'views/login.html',
               
            })

            .state('/register', {
                 url: '/register',
                controller: 'loginctrl',
                templateUrl: 'views/register.html',
                
            })

            $urlRouterProvider.otherwise("/employees")  


    };

   