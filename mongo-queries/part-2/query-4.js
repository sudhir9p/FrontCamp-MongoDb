// 4. What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain? Find top 10 carriers,
// but provide the last 7 carriers (do not include the first 3). Show result as { "_id" : "<carrier>", "total" : 999}


db.airlines.aggregate([{ $match: { originCountry: { $eq: "United States" }, destCountry: { $in: ["Greece", "Italy", "Spain"] } } }, { $group: { _id: { carrier: "$carrier" }, totalPassengers: { $sum: "$passengers" } } }, { $project: { _id: 0, carrier: "$_id.carrier", total: "$totalPassengers" } }, { $sort: { total: -1 } }, { $limit: 10 }, { $skip: 3 }]);





/*
db.airlines.aggregate(
    [
        {
            $match: {
                originCountry: { $eq: "United States" },
                destCountry: { $in: ["Greece", "Italy", "Spain"] }
            }
        },
        {
            $group: {
                _id: { carrier: "$carrier" },
                totalPassengers: {
                    $sum: "$passengers"
                }
            }
        },
        {
            $project: {
                _id: 0,
                carrier: "$_id.carrier",
                total: "$totalPassengers"
            }
        },
        {
            $sort: {
                total: -1
            }
        },
        {
            $limit: 10
        },
        {
            $skip: 3
        }
    ]
);

*/

/**
{ "carrier" : "Compagnia Aerea Italiana", "total" : 280256 }
{ "carrier" : "United Air Lines Inc.", "total" : 229936 }
{ "carrier" : "Emirates", "total" : 100903 }
{ "carrier" : "Air Europa", "total" : 94968 }
{ "carrier" : "Meridiana S.p.A", "total" : 20308 }
{ "carrier" : "Norwegian Air Shuttle ASA", "total" : 13344 }
{ "carrier" : "VistaJet Limited", "total" : 183 }
 */