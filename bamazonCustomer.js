// GLOBALS & REQUIRES
require("dotenv").config();
var inquirer = require("inquirer");
var mysql = require("mysql");
var keys = require("./keys");
var sqlPW = keys.mySQL.id;


// MYSQL CONNECTION
var sqlConnect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: sqlPW,
    database: "bamazon_db",
});

sqlConnect.connect(function(err) {
    if (err) throw err;
    chooseItem();
});


// DB_TABLE CALL
function readProducts() {
  console.log("Selecting all products...\n");
  sqlConnect.query("SELECT * FROM products", 
  function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement -> JSON
    console.log(res);
    connection.end();
  });
}

function chooseItem() {
    inquirer
        .prompt([
          {
            type: "rawlist",
            name: "item_id",
            message: "Please select the product ID number of the item you would like to buy today",
            choices: [
            "Pentel Energel Pens", 
            "Oil Filter Element", 
            "Leather Belt", 
            "Climbing Chalk", 
            "Addidas Campus Sneakers", 
            "Hydration Backpack", 
            "Aloe Vera Plant", 
            "Bluetooth Speaker", 
            "Cast-Iron Pan",
            "Chromebook"
            ] 
        },
        {
          name: "quantity",
          type: "number",
          message: "How many do you want to order?"
        }
      ])
        .then(function(answer) {
          var productQuery = "SELECT * FROM products WHERE product_name = ?";
          sqlConnect.query(productQuery, [answer.item_id], function(err,res) {
            if (res[0].stock_quantity < 10) {
              console.log("true");
            } else console.log("false");
          })
        });
};

function howMany() {
  inquirer
    .prompt({
      name: "quantity",
      type: "number",
      message: "How many do you want to order?"
    })
    .then(function(answer) {
        var amtRequest = answer.quantity;
        console.log(answer);
        // if (amtReqquest > productAmt) {
        //   console.log("We're sorry, that product is out of stock. Please try again at a later date");
        // }
        chooseItem();
    })
};