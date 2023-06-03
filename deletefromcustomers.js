var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Account0011",
  database:"groupca"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE password IS NULL";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});



  

  
  
  
  
  
  
  


