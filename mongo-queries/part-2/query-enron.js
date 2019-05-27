
db.enron.aggregate([ { $unwind: '$headers.To' }, { $group:{ '_id':{ 'from': '$headers.From', 'id': '$_id' }, '_to': { $addToSet : '$headers.To'} } }, { $unwind: '$_to' }, { $group: { '_id': { from: '$_id.from', to: '$_to' }, 'count': { $sum: 1} } }, { $sort: { 'count': -1 } }, { $limit: 1 } ], {allowDiskUse: true})



/*

db.enron.aggregate([
    {
        $unwind: '$headers.To'
    },
    {
       $group:{
           '_id':{
               'from': '$headers.From',
               'id': '$_id'
            },
            '_to': { $addToSet : '$headers.To'}
       }
    },
    {
        $unwind: '$_to'
    },
    {
        $group: {
            '_id': {
                from: '$_id.from',
                to: '$_to'
            },
            'count': { $sum: 1}
        }
    },
    {
        $sort: {
            'count': -1
        }
    },
    {
        $limit: 1
    }
],
{allowDiskUse: true})

*/