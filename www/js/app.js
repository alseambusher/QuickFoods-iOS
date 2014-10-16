(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.controller('HistoryController', function($scope, $data) {
    // todo: remove this and add actual code
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.controller('TakeOrderController', function($scope, $data) {
    // todo: remove this and add actual code
    $scope.items = $data.items; 
    $scope.categories = $data.categories;  
    $scope.default_categories = $data.categories[0].title;
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });



  module.factory('$data', function() {
      var data = {};
      
      data.items = [
          { 
              title: 'Veg Manchow Soup',
              category: 'Veg',
              status: 'Completed'
          },
          { 
              title: 'Gobi Manchurian',
              category: 'Veg',
              status: 'Started'
          },
          { 
              title: 'Chilly Chicken',
              category: 'Non Veg',
              status: 'Started'
          },
          { 
              title: 'Pepsi',
              category: 'Drinks',
              status: 'Completed'
          }
      ]; 

      data.categories = [

          {
              title: 'Veg'
          },
          {
              title: 'Non Veg'
          },
          {
              title: 'Drinks'
          },
      ];
      
      return data;
  });
})();

