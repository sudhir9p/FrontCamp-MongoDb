//6. Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the index is indeed used by the winning plan:
//db.restaurants.find({ name: "Glorious Food" })


var createindex = db.restaurants.createIndex({ name: 1 });

execute(createindex);


/**
 {
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
 */


 /**
  *  db.restaurants.find({ name: "Glorious Food" }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "name" : {
                                "$eq" : "Glorious Food"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "name" : 1
                                },
                                "indexName" : "name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "name" : [
                                                "[\"Glorious Food\", \"Glorious Food\"]"
                                        ]
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

