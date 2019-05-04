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
        .prompt({
            type: "rawlist",
            name: "productId",
            message: "Please select the product ID number of the item you would like to buy today",
            choices: [
            "1 - Pentel Energel Pens", 
            "2 - Oil Filter Element", 
            "3 - Leather Belt", 
            "4 - Climbing Chalk", 
            "5 - Addidas Campus Sneakers", 
            "6 - Hydration Backpack", 
            "7 - Aloe Vera Plant", 
            "8 - Bluetooth Speaker", 
            "9 - Cast-Iron Pan",
            "10 - Chromebook"
            ] 
        })
        .then(function(answer) {
            howMany();
    });
};

function howMany() {
  inquirer
    .prompt({
      name: "quantity",
      type: "input",
      message: "How many do you want to order?"
    })
    .then(function(answer) {
        console.log(answer.quantity);
    })
};