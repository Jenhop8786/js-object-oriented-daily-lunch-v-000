// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let customerId = 0 
let neighborhoodId =0
let deliveryId = 0
let mealId = 0

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodsId;
    store.neighborhoods.push(this);
  }
  
}