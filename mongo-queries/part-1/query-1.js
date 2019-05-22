// 1. How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?

let result = db.restaurants.count({"cuisine":"Chinese", "borough":"Queens"})

print(result);

// 728