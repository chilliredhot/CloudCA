var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Account0011",
  database:"groupca"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address,password) VALUES ?";
    var values = [
      ['John', 'Highway 71','abc123'],
      ['Peter', 'Lowstreet 4','abc444'],
      ['Amy', 'Apple st 652','abc555'],
      ['Hannah', 'Mountain 21','abc666'],
      ['Michael', 'Valley 345','abcxxxx'],
      ['Sandy', 'Ocean blvd 2','abcxxxx'],
      ['Betty', 'Green Grass 1','abcxxxx'],
      ['Richard', 'Sky st 331','abcxxxx'],
      ['Susan', 'One way 98','abcxxxx'],
      ['Vicky', 'Yellow Garden 2','abcxxxx'],
      ['Ben', 'Park Lane 38','abcxxxx'],
      ['William', 'Central st 954','abcxxxx'],
      ['Chuck', 'Main Road 989','abcxxxx'],
      ['Viola', 'Sideway 1633','abcxxxx']
   ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });
  

