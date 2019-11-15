var msql = require("mysql");

var connection = mysql 

user: root

password: "root",
database: "thiskid1029"

connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.ThreadId);
connection.query("select + from products", function(err, response) {
    console.log(response);

});
connection.end();

});

