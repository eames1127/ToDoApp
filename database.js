const mongoClient = require('mongodb').MongoClient;
require("dotenv").config();

const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;
const location = process.env.MONGODB_LOCATION;
const database = process.env.DATABASE;
const collection = process.env.DB_COLLECTION;

const url = `mongodb+srv://${user}:${password}${location}${database}`

mongoClient.connect(url,{useUnifiedTopology: true },function (err, client){
    if (err) {
        throw err;
    }
    var dbo = client.db(database);
    dbo.createCollection(collection, function(err, res) {
        if(err.code = '48'){
            console.log(`The collection "${collection}" already exists on ${database}`)
        }
        else if (err){
            throw err;
        }

        if(!err){
            console.log("Collection created!");
        }
        getAllTasks(dbo, client);
    });
});

function getAllTasks(dbo, client){
    dbo.collection(collection).find({}).toArray(function(err, result) {
        console.log("Fetching data...")
        if (err) throw err;
        console.log(result);
        client.close();
    });
}