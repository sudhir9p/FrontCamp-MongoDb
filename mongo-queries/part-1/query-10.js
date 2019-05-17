// 10.Create an index to make query from task 4 covered and provide proof (from explain() or Compass UI) that it is indeed covered

//4. What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without _id.


var createIndex = db.restaurants
    .createIndex(
        { 'grades.7.score': 1 },
        {
            partialFilterExpression: {
                'grades.7.score': { $lt: 7 }
            }
        }
    );




/**
 * 
 * {
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 3,
        "numIndexesAfter" : 4,
        "ok" : 1
}
 */




/**
 * 
 *  db.restaurants.find({"grades.7.score": {$lt : 7} },{"restaurant_id" : 1,"name":1,"address":1,"grades":1}).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "grades.7.score" : {
                                "$lt" : 7
                        }
                },
                "winningPlan" : {
                        "stage" : "PROJECTION",
                        "transformBy" : {
                                "restaurant_id" : 1,
                                "name" : 1,
                                "address" : 1,
                                "grades" : 1
                        },
                        "inputStage" : {
                                "stage" : "FETCH",
                                "inputStage" : {
                                        "stage" : "IXSCAN",
                                        "keyPattern" : {
                                                "grades.7.score" : 1
                                        },
                                        "indexName" : "grades.7.score_1",
                                        "isMultiKey" : false,
                                        "multiKeyPaths" : {
                                                "grades.7.score" : [ ]
                                        },
                                        "isUnique" : false,
                                        "isSparse" : false,
                                        "isPartial" : true,
                                        "indexVersion" : 2,
                                        "direction" : "forward",
                                        "indexBounds" : {
                                                "grades.7.score" : [
                                                        "[-inf.0, 7.0)"
                                                ]
                                        }
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "EPINHYDW0939",
                "port" : 27017,
                "version" : "4.0.9",
                "gitVersion" : "fc525e2d9b0e4bceff5c2201457e564362909765"
        },
        "ok" : 1
}
 */