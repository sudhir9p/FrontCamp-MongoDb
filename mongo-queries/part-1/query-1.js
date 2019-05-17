// 1. How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?

let result = db.restaurants
    .find({
        cuisine: { $eq: 'Chinese' },
        borough: { $eq: 'Queens' }
    })
    .count()

print(result);

// 728