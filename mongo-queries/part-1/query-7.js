// 7. Drop index from task 4.1(6th)


var dropIndex = db.restaurants.dropIndex({ name: 1 });

execute(dropIndex);

/**
 * { "nIndexesWas" : 2, "ok" : 1 }
 */

 


