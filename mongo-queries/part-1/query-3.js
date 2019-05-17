// 3. Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).

var query = db.restaurants
    .updateMany(
        { "borough": "Manhattan" },
        {
            $push:
            {
                grades:
                {
                    $each:
                        [
                            { grade: "A", score: 7, date: ISODate() }
                        ]
                }
            }
        }
    );

    execute(query);
    // { "acknowledged" : true, "matchedCount" : 10259, "modifiedCount" : 10259 }
