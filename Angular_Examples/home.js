angular.module("myapp",[])
    .controller("HelloController",function($scope){
       //$scope.helloTo={}
       $scope.helloTo="AngularJS is from old app"
    })


    .controller("Examplefirst",function($scope){
        //$scope.helloTo={}
        $scope.helloTo="This is from new app"
        $scope.newApp="WORD!!!!!!!!!! from new app"
    })
    .controller("Repeter",function($scope){
     $scope.animalList=['Tiger','Lion','Dog','Bull'];
     $scope.counDicty=[{'name':'India','population':9595555655},
         {'name':'China','population':56956565656263},
         {"name": "United States of America","population": 312247000}


     ];
     $scope.addName=function(){
         $scope.animalList.push($scope.enterName);

     }
     $scope.removeName=function(animal){
         var i=$scope.animalList.indexOf(animal);
         $scope.animalList.splice(i,1);
     }

    });
