// 9. Create a partial index on cuisine field which will be used only when filtering on borough equal to “Staten Island”:
// db.restaurants.find({ borough: "Staten Island", cuisine: "American" }) – uses index
// db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }) – does not use index
// db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }) – does not use index

var createIndex =  db.restaurants.createIndex({ cuisine: 1 }, { partialFilterExpression: { borough: { $eq: 'Staten Island' } } });


var createIndex2 = db.restaurants.createIndex({ cuisine: 1 ,borough: 1}, { partialFilterExpression: { borough: { $eq: 'Staten Island' } } }); // Uses Both columns as index in keypattern
execute(createIndex);


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
 * db.restaurants.find({ borough: "Staten Island", cuisine: "American" }).explain()
{
       "queryPlanner" : {
               "plannerVersion" : 1,
               "namespace" : "frontcamp.restaurants",
               "indexFilterSet" : false,
               "parsedQuery" : {
                       "$and" : [
                               {
                                       "borough" : {
                                               "$eq" : "Staten Island"
                                       }
                               },
                               {
                                       "cuisine" : {
                                               "$eq" : "American"
                                       }
                               }
                       ]
               },
               "winningPlan" : {
                       "stage" : "FETCH",
                       "filter" : {
                               "borough" : {
                                       "$eq" : "Staten Island"
                               }
                       },
                       "inputStage" : {
                               "stage" : "IXSCAN",
                               "keyPattern" : {
                                       "cuisine" : 1
                               },
                               "indexName" : "cuisine_1",
                               "isMultiKey" : false,
                               "multiKeyPaths" : {
                                       "cuisine" : [ ]
                               },
                               "isUnique" : false,
                               "isSparse" : false,
                               "isPartial" : true,
                               "indexVersion" : 2,
                               "direction" : "forward",
                               "indexBounds" : {
                                       "cuisine" : [
                                               "[\"American\", \"American\"]"
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



/**
 *  db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }).explain()
{
      "queryPlanner" : {
              "plannerVersion" : 1,
              "namespace" : "frontcamp.restaurants",
              "indexFilterSet" : false,
              "parsedQuery" : {
                      "$and" : [
                              {
                                      "borough" : {
                                              "$eq" : "Staten Island"
                                      }
                              },
                              {
                                      "name" : {
                                              "$eq" : "Bagel Land"
                                      }
                              }
                      ]
              },
              "winningPlan" : {
                      "stage" : "COLLSCAN",
                      "filter" : {
                              "$and" : [
                                      {
                                              "borough" : {
                                                      "$eq" : "Staten Island"
                                              }
                                      },
                                      {
                                              "name" : {
                                                      "$eq" : "Bagel Land"
                                              }
                                      }
                              ]
                      },
                      "direction" : "forward"
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






/**
 * db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }).explain()
{
     "queryPlanner" : {
             "plannerVersion" : 1,
             "namespace" : "frontcamp.restaurants",
             "indexFilterSet" : false,
             "parsedQuery" : {
                     "$and" : [
                             {
                                     "borough" : {
                                             "$eq" : "Queens"
                                     }
                             },
                             {
                                     "cuisine" : {
                                             "$eq" : "Pizza"
                                     }
                             }
                     ]
             },
             "winningPlan" : {
                     "stage" : "COLLSCAN",
                     "filter" : {
                             "$and" : [
                                     {
                                             "borough" : {
                                                     "$eq" : "Queens"
                                             }
                                     },
                                     {
                                             "cuisine" : {
                                                     "$eq" : "Pizza"
                                             }
                                     }
                             ]
                     },
                     "direction" : "forward"
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



---------------------Second Query--------------

 db.restaurants.find({ borough: "Staten Island", cuisine: "American" }).explain()
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "borough" : {
                                                "$eq" : "Staten Island"
                                        }
                                },
                                {
                                        "cuisine" : {
                                                "$eq" : "American"
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "cuisine" : 1,
                                        "borough" : 1
                                },
                                "indexName" : "cuisine_1_borough_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "cuisine" : [ ],
                                        "borough" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : true,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "cuisine" : [
                                                "[\"American\", \"American\"]"
                                        ],
                                        "borough" : [
                                                "[\"Staten Island\", \"Staten Island\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [
                        {
                                "stage" : "FETCH",
                                "filter" : {
                                        "borough" : {
                                                "$eq" : "Staten Island"
                                        }
                                },
                                "inputStage" : {
                                        "stage" : "IXSCAN",
                                        "keyPattern" : {
                                                "cuisine" : 1
                                        },
                                        "indexName" : "cuisine_1",
                                        "isMultiKey" : false,
                                        "multiKeyPaths" : {
                                                "cuisine" : [ ]
                                        },
                                        "isUnique" : false,
                                        "isSparse" : false,
                                        "isPartial" : true,
                                        "indexVersion" : 2,
                                        "direction" : "forward",
                                        "indexBounds" : {
                                                "cuisine" : [
                                                        "[\"American\", \"American\"]"
                                                ]
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