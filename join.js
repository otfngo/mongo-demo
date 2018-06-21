let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err
  }
  let dbo = db.db('mydb')
  dbo.collection('orders').aggregate([
    {
      $lookup: {
        from: 'products',
        localField: 'product_id',
        foreignField: '_id',
        as: 'orderdetails'
      }
    }
  ]).toArray((err, res) => {
    if (err) {
      throw err
    }
    console.log(JSON.stringify(res))
    db.close()
  })
})