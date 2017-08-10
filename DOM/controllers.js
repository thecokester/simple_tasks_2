var controllers = angular.module('myApp.controllers', []);

controllers.controller('TaskController', ['$scope', function($scope) {
    $scope.ping = function() {
        alert('You shall not pass!');
    }

    $scope.texter = function() {
        alert($scope.msg);
    }
    $scope.randomColor = function() {
        var numerals = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += numerals[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $scope.spanner = function() {
        var newSpan = angular.element('<span> Tom Moore </span>');
        newSpan.appendTo('#spanDiv');
    }
    
    var counter = 0;
    $scope.addFriend = function () {   
       if (counter < 9) {
            var frand = angular.element('<li>' + friends[counter] + '</li>');
            frand.appendTo('#friends');
            counter++;
        }
        else {
            alert("You don't have any more friends!");
        }
    }
    
    var friends = ['Dylan', 'Nequil', 'JB', 'Chance', 'Justin', 'Adriene', 'Domonique', 'Lance', 'Kristine', 'Chris'];
}]);

 function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

