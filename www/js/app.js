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
    $scope.items = $data.ordered_items; 
    $scope.print_bill = function(){
    	var type = "text/html";
	var title = "test.html";
	// TODO make this take current window and apply some customization to bill
	var fileContent = "<html>Phonegap Print Plugin</html>";
	window.plugins.PrintPlugin.print(fileContent,function(){console.log('success')},function(){console.log('fail')},"",type,title);
    };
    /*$scope.showDetail = function(index) {
      var selectedItem = $data.ordered_items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };*/
  });


  module.controller('KitchenController', function($scope, $data) {
    // todo: remove this and add actual code
    $scope.items = $data.ordered_items; 
    $scope.showDetail = function(index) {
      var selectedItem = $data.ordered_items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.controller('ListItemsController', function($scope, $data) {
    // todo: remove this and add actual code
    $scope.items = $data.items; 
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });



  module.factory('$data', function() {
      var data = {};
      
      data.ordered_items = [
          { 
              title: 'Veg Manchow Soup',
              category: 'Veg',
              status: 'Completed',
	            quantity: 5,
              table_number: 21
          },
          { 
              title: 'Gobi Manchurian',
              category: 'Veg',
              status: 'Started',
	            quantity: 2,
              table_number: 21
          }, 
          { 
              title: 'Chilly Chicken',
              category: 'Non Veg',
              status: 'Started',
	            quantity: 3,
              table_number: 21
          },
          { 
              title: 'Paneer Butter Masala',
              category: 'Veg',
              status: 'Started',
              quantity: 3,
              table_number: 21
          },
          { 
              title: 'Chicken Butter Masala',
              category: 'Non Veg',
              status: 'Completed',
              quantity: 3,
              table_number: 21
          },
          { 
              title: 'Pepsi',
              category: 'Drinks',
              status: 'Completed',
	            quantity: 6,
              table_number: 21
          }
      ]; 

      data.items = [
          { 
              title: 'Veg Manchow Soup',
              category: 'Veg',
	      image : 'res/mancho.jpg',
	      price : "Rs. 99",
          },
          { 
              title: 'Gobi Manchurian',
              category: 'Veg',
	      image : 'res/gobi.jpg',
	      price : "Rs. 80",
          },
          { 
              title: 'Chilly Chicken',
              category: 'Non Veg',
	      image : 'res/chilli_chicken.jpg',
	      price : "Rs. 159",
          },
          { 
              title: 'Paneer Butter Masala',
              category: 'Veg',
	      price : "Rs. 115",
          },
          { 
              title: 'Chicken Butter Masala',
              category: 'Non Veg',
	      price : "Rs. 129",
          },
          { 
              title: 'Pepsi',
              category: 'Drinks',
	      image : 'res/pepsi.png',
	      price : "Rs. 20",
          }
      ]; 
      
      return data;
  });
})();

