const database = require("../database");
let tasks


exports.index = (req, res) => {

    database.getConnection().then(function(conn) {
        conn.find({}).toArray(function(err, result) {
            console.log("Fetching data...")
            if (err) throw err;
            tasks = result;
        });
    });    
    
    console.log(tasks)
    res.render("home", {tasks:tasks});
}