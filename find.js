let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err
  }
  let dbo = db.db('mydb')
  dbo.collection('customers').find({ address: /^S/ }).toArray((err, res) => {
    if (err) {
      throw err
    }
    console.log(res)
    db.close()
  })
})