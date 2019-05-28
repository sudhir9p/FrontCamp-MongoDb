// 3. Which carriers provide flights to Latvia (destCountry)? Show result as one document { "_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", …] }

db.airlines.aggregate([ { $match: { 'destCountry': { $eq: 'Latvia' } } }, { $group: { '_id': "$destCountry", 'carriers': { $addToSet: '$carrier' } } } ]);

/*
db.airlines.aggregate([
    {
        $project: {
            destCountry: "$destCountry",
            carrier: "$carrier"
        }
    },

    {
        $match: {
            'destCountry': { $eq: 'Latvia' }
        }
    },
    {
        $group: {
            '_id': "$destCountry",
            'carriers': { $addToSet: '$carrier' }
        }
    }
]);

*/


/**
{ "_id" : "Latvia", "carriers" : [ "Uzbekistan Airways", "Blue Jet SP Z o o", "JetClub AG" ] }
 */