var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Account0011",
  database:"webproject"
});

  con.connect(function(err) {
      if (err) throw err;
      var sql = "CREATE TABLE payments  (id INT AUTO_INCREMENT PRIMARY KEY, paymentmethod VARCHAR(50), paymentdate DATE , amount DECIMAL(10,2))";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('New table created');
      });
    });

  

