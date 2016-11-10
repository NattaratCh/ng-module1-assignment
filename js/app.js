(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.showingMessage="";
    $scope.foodList="";
    $scope.txtColor="";
    $scope.textboxClass=""
    $scope.checkFoodAmount = function(){
      if($scope.foodList==''){
        $scope.showingMessage="Please enter data first";
        $scope.txtColor="txt-red";
        $scope.textboxClass="has-error";
      }else{
        var foodLength = getLengthOfList($scope.foodList,",");
        if(foodLength > 3){
          $scope.showingMessage="Too much!";
          $scope.txtColor="txt-green";
          $scope.textboxClass="has-success";
        }else if(foodLength >0 && foodLength <=3){
          $scope.showingMessage="Enjoy!";
          $scope.txtColor="txt-green";
          $scope.textboxClass="has-success";
        }else{
          $scope.showingMessage="Please enter data first";
          $scope.txtColor="txt-red";
          $scope.textboxClass="has-error";
        }
      }
    };
  }

  function getLengthOfList(list, separator){
    var array = list.split(separator);
    var arrayLength = array.length;
    for(var i=0;i<array.length;i++){
      if(array[i].trim()==''){
        arrayLength -=1;
      }
    }
    return arrayLength;
  }
})();
