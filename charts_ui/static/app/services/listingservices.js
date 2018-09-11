angular.module('listingService',[])

.service('listingService',['$http', function($http){

   // $http.get('api/listdata/').then(success, failure)
    var  listing = {}

    listing.listingadultDataservice = function(success, failure, filtersObject){
        $http.get('api/listdata/?filters='+JSON.stringify(filtersObject),{
            params: {
                'currentpageNum': 1,
            }
        }).then(success, failure)
    }

    return listing;

 }])