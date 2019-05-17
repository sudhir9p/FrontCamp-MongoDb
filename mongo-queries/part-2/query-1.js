// 1. How many records does each airline class have? Use $project to show result as { class: "Z", total: 999 }

var query = db.airlines
    .aggregate(
        [
            {
                $group: {
                    _id: "$class",
                    total: { $sum: 1 }
                }
            },
            {
                $project:
                {
                    _id: 0,
                    class: "$_id",
                    total: "$total"
                }
            }
        ]
    );


execute(query);

/**
 *
{ "class" : "F", "total" : 140343 }
{ "class" : "L", "total" : 23123 }
{ "class" : "P", "total" : 5683 }
{ "class" : "G", "total" : 17499 }
 */