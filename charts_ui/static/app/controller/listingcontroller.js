angular.module('listingController',[])

.controller('listingController', ['listingService','$scope','$http', function(listingService,$scope,$http){

    $scope.results = []

    $scope.sex = [" Male"," Female"];
    $scope.race = [" White"," Black"," Asian-Pac-Islander"," Amer-Indian-Eskimo"," other"];
    $scope.relationship = [" Husband"," Not-in-family"," Wife"," Own-child"];


    $scope.filterObject = {

    	race: null,
    	relationship: null,
    	sex: null,

    }


    $scope.listingadultData = function(){

        var success = function(response){
            console.log('success')
            $scope.adultData = response.data.data.data
            console.log($scope.adultData)
            $scope.pageNumber = $scope.adultData[0].pagenum
            console.log($scope.pageNumber)

        }

        var failure = function(response){
            console.log('failure')
            console.log(response)
        }


       listingService.listingadultDataservice(success, failure,$scope.filterObject)

    }


    $scope.paginatorNextPageNo = function(){
        console.log(typeof($scope.pageNumber))
        count = parseInt($scope.pageNumber)+1;
        console.log(count)
        $http.get('api/listdata/?filters='+JSON.stringify($scope.filterObject),{
            params: {
                'currentpageNum': count,
            }


        }).then(function(response){
            console.log(response)
            console.log('success')
            angular.forEach(response.data.data.data, function(d){
                $scope.adultData.push(d)
            })
            console.log($scope.adultData)
            $scope.pageNumber = $scope.adultData[0].pagenum
            console.log($scope.pageNumber)

        })

    }

//    $scope.results = []
//
//    $scope.sex = ["male","female"];
//    $scope.race = ["White","Black","Asian-Pac-Islander","Amer-Indian-Eskimo","other"];
//    $scope.relationship = ["Husband","Not-in-family","Wife","Own-child"];

//    $scope.filterObject = {
//
//    	race: null,
//    	relationship: null,
//    	sex: null,
//
//    }
//
//
////    scope.reset = function(){
//        scope.results = []
//        scope.fresh = true;
//        scope.filterObject = {
//
//           race: null,
//    	   relationship: null,
//    	   sex: null,
//
//        }
//    }
//
//    $scope.getRecords = function(){
//        scope.results = [];
//    	var success = function(response){
//            scope.results = response.data;
//    	}
//
//    	var failure = function(error){
//
//    		console.log(error)

//    	}

//    filterService.getRecords(success, failure, scope.filterObject)

//    }

}]);
