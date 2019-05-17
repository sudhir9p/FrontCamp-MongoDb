// 5. What are _id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade
// in period from 2014-02-01 to 2014-03-01? Use projection to include only _id and borough.

var query = db.restaurants.find(
    {
        "cuisine": "Seafood",
        "grades.grade": "B",
        "grades.date": {
            $gte: new ISODate("2014-02-01T00:00:00.000Z"),
            $lte: new ISODate("2014-03-01T00:00:00.000Z")
        }
    },
    {
        _id: 1,
        borough: 1
    }
);


execute(query);


/*

{ "_id" : ObjectId("5cde59a747521758a3387f59"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3387f8b"), "borough" : "Bronx" }
{ "_id" : ObjectId("5cde59a747521758a3387f92"), "borough" : "Queens" }
{ "_id" : ObjectId("5cde59a747521758a338800a"), "borough" : "Bronx" }
{ "_id" : ObjectId("5cde59a747521758a3388082"), "borough" : "Brooklyn" }
{ "_id" : ObjectId("5cde59a747521758a3388370"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3388702"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3388825"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a33889b0"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3388aa3"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3388b04"), "borough" : "Brooklyn" }
{ "_id" : ObjectId("5cde59a747521758a3388b28"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3388dec"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3388e3c"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a3388e6d"), "borough" : "Queens" }
{ "_id" : ObjectId("5cde59a747521758a3388edb"), "borough" : "Brooklyn" }
{ "_id" : ObjectId("5cde59a747521758a3388f48"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a33892a3"), "borough" : "Manhattan" }
{ "_id" : ObjectId("5cde59a747521758a33896de"), "borough" : "Queens" }
{ "_id" : ObjectId("5cde59a747521758a33897de"), "borough" : "Queens" }


*/
