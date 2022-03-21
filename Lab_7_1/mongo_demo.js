var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mongo_demo_iot");
  dbo.createCollection("rfid", function(err, res) {
    if (err){
        console.log("Collection exists!");
    }else{
        console.log("Collection created!");
    }
  });
  var card_object = { card_id: "55 16 3B 2B", room: "39" };
  dbo.collection("rfid").find({card_id: card_object.card_id}).toArray(function(err, result) {
    if (err) throw err;
    if(result.length==0){
        dbo.collection("rfid").insertOne(card_object, function(err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
        });
    }else{
        console.log("RFID already exists!");
        console.log(result);
        db.close();
    }
  });
});
