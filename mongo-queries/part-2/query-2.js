// 2. What are the top 3 destination cities outside of the United States (destCountry field, not included) with the
// highest average passengers count? Show result as { "avgPassengers" : 2312.380, "city" : "Minsk, Belarus" }

var query = db.airlines.aggregate(
    [
        {
            $match: {
                "destCountry": {
                    $ne: "United States"
                }
            }
        },
        {
            $group: {
                "_id": { destCity: "$destCity", destCountry: "$destCountry" },
                avgPassengers: { $avg: "$passengers" }
            }
        },
        {
            $sort: {
                avgPassengers: -1
            }
        },
        {
            $project: {
                _id: 0,
                city: "$_id.destCity",
                avgPassengers: 1
            }
        },
        {
            $limit: 3
        }
    ]
);

execute(query);


/**
{ "avgPassengers" : 8052.380952380952, "city" : "Abu Dhabi, United Arab Emirates" }
{ "avgPassengers" : 7176.596638655462, "city" : "Dubai, United Arab Emirates" }
{ "avgPassengers" : 7103.333333333333, "city" : "Guangzhou, China" }
 */
