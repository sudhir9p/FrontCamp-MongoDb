//5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry).
// Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc).
// Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }


db.airlines.aggregate([{ $match: { 'originCountry': { $eq: 'United States' } } }, { $group: { '_id': { 'originCity': '$originCity', 'originState': '$originState' }, 'cityPassengers': { $sum: '$passengers' } } }, { $sort: { '_id.originState': 1, 'cityPassengers': -1 } }, { $group: { '_id': '$_id.originState', 'city': { $first: '$_id.originCity' }, 'totalPassengers': { $first: "$cityPassengers" } } }, { $sort: { '_id': 1 } }, { $limit: 5 }, { $project: { _id: 0, totalPassengers: 1, 'location': { 'state': '$_id', 'city': '$city' } } }]);




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
            $sort: {
                '_id.originState': 1,
                'cityPassengers': -1
            }
        },
        {
            $group: {
                '_id': '$_id.originState',
                'city': { $first: '$_id.originCity' },
                'totalPassengers': { $first: "$cityPassengers" }
            }
        },
        {
            $sort: {
                '_id': 1
            }
        },
        {
            $limit: 5
        },
        {
            $project: {
                _id: 0,
                totalPassengers: 1,
                'location': { 'state': '$_id', 'city': '$city' }
            }
        }
    ]
);

*/



/**NEW OUTPUT
 
{ "totalPassengers" : 760120, "location" : { "state" : "Alabama", "city" : "Birmingham, AL" } }
{ "totalPassengers" : 1472404, "location" : { "state" : "Alaska", "city" : "Anchorage, AK" } }
{ "totalPassengers" : 13152753, "location" : { "state" : "Arizona", "city" : "Phoenix, AZ" } }
{ "totalPassengers" : 571452, "location" : { "state" : "Arkansas", "city" : "Little Rock, AR" } }
{ "totalPassengers" : 23701556, "location" : { "state" : "California", "city" : "Los Angeles, CA" } }


 */

/**
{ "location" : { "originCity" : "Roanoke, VA", "originState" : "Virginia" }, "totalPassengers" : 12946230 }
{ "location" : { "originCity" : "Atlanta, GA", "originState" : "Georgia" }, "totalPassengers" : 29416565 }
{ "location" : { "originCity" : "Charlotte Amalie, VI", "originState" : "U.S. Virgin Islands" }, "totalPassengers" : 502023 }
{ "location" : { "originCity" : "Sioux Falls, SD", "originState" : "South Dakota" }, "totalPassengers" : 310052 }
{ "location" : { "originCity" : "Salmon, ID", "originState" : "Idaho" }, "totalPassengers" : 1000367 }
 */