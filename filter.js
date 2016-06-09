var dishes = require("./cooking-dishes.js");
module.exports = class filter{

// Setup
  constructor(){
  }

// Returns Dishes With Matching Method
  filterByMethod(method){
    return dishes.filter(function(dish){
      return dish.method === method;
    });
  }

// Return Dish by Name
  getDish(name){
    return dishes.find(function(dish){
      return dish.name === name;
    });
  }

  getDishById(id){
    return dishes.find(function(dish){
      return dish.id === id;
    });
  }
}
