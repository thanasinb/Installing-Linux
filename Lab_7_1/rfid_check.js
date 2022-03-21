var mqtt = require('mqtt');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const MQTT_SERVER   = "localhost";
const MQTT_PORT     = "1883";
const MQTT_USER     = ""; 
const MQTT_PASSWORD = "";

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.subscribe('request', function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());

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
    var card_object = { card_id: message.toString(), room: "39" };
    dbo.collection("rfid").find({card_id: card_object.card_id}).toArray(function(err, result) {
        if (err) throw err;
        if(result.length==0){
            client.publish("ack", "Denied");
            db.close();
        }else{
            client.publish("ack", "Accept");
            // console.log("RFID already exists!");
            // console.log(result);
            db.close();
        }
    });
    });

});

// setInterval(() => {
//     client.publish("test", "hello from NodeJS");
// }, 5000);
