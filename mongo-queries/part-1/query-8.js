//8. Create an index to make this query covered and provide proof (from explain() or Compass UI) that it is indeed covered:
//db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 })


var createIndex = db.restaurants.createIndex({ "restaurant_id": 1, "borough": 1 });


/**
 *
 *
 *  db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "restaurant_id" : {
                                "$eq" : "41098650"
                        }
                },
                "winningPlan" : {
                        "stage" : "PROJECTION",
                        "transformBy" : {
                                "_id" : 0,
                                "borough" : 1
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "restaurant_id" : 1,
                                        "borough" : 1
                                },
                                "indexName" : "restaurant_id_1_borough_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "restaurant_id" : [ ],
                                        "borough" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "restaurant_id" : [
                                                "[\"41098650\", \"41098650\"]"
                                        ],
                                        "borough" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [
                        {
                                "stage" : "PROJECTION",
                                "transformBy" : {
                                        "_id" : 0,
                                        "borough" : 1
                                },
                                "inputStage" : {
                                        "stage" : "FETCH",
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "keyPattern" : {
                                                        "restaurant_id" : 1
                                                },
                                                "indexName" : "restaurant_id_1",
                                                "isMultiKey" : false,
                                                "multiKeyPaths" : {
                                                        "restaurant_id" : [ ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : false,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "restaurant_id" : [
                                                                "[\"41098650\", \"41098650\"]"
                                                        ]
                                                }
                                        }
                                }
                        }
                ]
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