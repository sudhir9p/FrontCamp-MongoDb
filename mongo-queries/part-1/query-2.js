// 2. What is the _id of the restaurant which has the grade with the highest ever score?


var result = db.restaurants
    .find(
        {},
        { _id: 1 }
    )
    .sort({ "grades.score": -1 })
    .limit(1);


print(result);
// { "_id" : ObjectId("5cde59a747521758a3387fe9") }