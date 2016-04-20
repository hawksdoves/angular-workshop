countersApp.controller("countersCtrl", ['countersFactory', function(countersFactory){
 	
	var self = this;
   
  // self.count = 0;

  self.quantity = [
  	new countersFactory(),
  	new countersFactory(),
  	new countersFactory(),
  	new countersFactory()
  ]

}]);

countersApp.factory('countersFactory', function(){
	var Counter = function(){
		this.count = 0;
	};

	Counter.prototype.increment = function() {
    this.count++;
  }

  Counter.prototype.decrement = function() {
    this.count--;
  }
	return Counter;
});

});


