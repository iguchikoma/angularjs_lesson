myapp = angular.module("myapp", []);

myapp.controller("mainCtrl", function($scope) {
  $scope.users = [
     {"name":"taguchi", "score":52},
     {"name":"iguchi", "score":33},
     {"name":"hoge", "score":22},
     {"name":"foo", "score":11},
     {"name":"bar", "score":100},
     {"name":"aaa", "score":33},
     {"name":"risa", "score":88}
  ];
  $scope.today = new Date();
  $scope.myname = "iguchi";
  $scope.orderProp = "name";
  $scope.adduser = function() {
  }
});

myapp.controller("userItemCtrl", function($scope) {
    $scope.increment = function () {
      $scope.user.score++;
    }
});
