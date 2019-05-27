//5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry).
// Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc).
// Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }


db.airlines.aggregate([{ $match: { 'originCountry': { $eq: 'United States' } } }, { $group: { '_id': { 'originCity': '$originCity', 'originState': '$originState' }, 'cityPassengers': { $sum: '$passengers' } } }, { $group: { '_id': '$_id.originState', 'location': { $mergeObjects: '$_id' }, 'totalPassengers': { $max: '$cityPassengers' } } }, { $sort: { 'location.state': 1 } }, { $project: { _id: 0, totalPassengers: 1, 'location': 1 } }, { $limit: 5 }]);




/*

db.airlines.aggregate(
    [
        {
            $match: {
                'originCountry': { $eq: 'United States' }
            }
        },
        {
            $group: {
                '_id': {
                    'originCity': '$originCity',
                    'originState': '$originState'
                },
                'cityPassengers': { $sum: '$passengers' }
            }
        },
        {
            $group: {
                '_id': '$_id.originState',
                'location': { $mergeObjects: '$_id' },
                'totalPassengers': { $max: '$cityPassengers' }
            }
        },
        {
            $sort: {
                'location.state': 1
            }
        },
        {
            $project: {
                _id: 0,
                totalPassengers: 1,
                'location': 1
            }
        },
        {
            $limit: 5
        }
    ]
);

*/

/**
{ "location" : { "originCity" : "Roanoke, VA", "originState" : "Virginia" }, "totalPassengers" : 12946230 }
{ "location" : { "originCity" : "Atlanta, GA", "originState" : "Georgia" }, "totalPassengers" : 29416565 }
{ "location" : { "originCity" : "Charlotte Amalie, VI", "originState" : "U.S. Virgin Islands" }, "totalPassengers" : 502023 }
{ "location" : { "originCity" : "Sioux Falls, SD", "originState" : "South Dakota" }, "totalPassengers" : 310052 }
{ "location" : { "originCity" : "Salmon, ID", "originState" : "Idaho" }, "totalPassengers" : 1000367 }
 */