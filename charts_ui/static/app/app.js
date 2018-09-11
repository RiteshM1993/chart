var routerApp = angular.module('chartsApp',[
    'ngMaterial',
    'ui.router',
    'chart.js',
    'chartsCtrl',
    'listingController',
    'listingService'
    ])


//.config(function($stateProvider,$urlRouterProvider){
//
//    $urlRouterProvider.otherwise('/');
//
//    $stateProvider
//    .state('/', {
//             url: '/',
//             views: {
//                "mainContent@" : {
//                    templateUrl: '/static/views/charts.html',
//                    controller: 'chartsCtrl',
//                    controllerAs: 'chartsScope'
//                }
//            }
//
//         })
//
//    .state('listing', {
//         url: '/listing',
//         views: {
//            "mainContent@" : {
//                templateUrl: '/static/views/listing.html',
//                controller: 'listingController',
//                controllerAs: 'listingScope'
//            }
//        }
//
//     })
//
//
//});