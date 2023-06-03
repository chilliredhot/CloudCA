var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Account0011",
  database:"groupca"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "ALTER TABLE customers ADD COLUMN password VARCHAR(255)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('New Column added to the table');
  });
});



  

  
  
  
  
  
  
  


