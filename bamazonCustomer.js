// GLOBALS & REQUIRES
require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var keys = require("./keys");
var sqlPW = keys.mySQL.id;
console.log(sqlPW);

// MYSQL CONNECTION
var sqlConnect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: sqlPW,
    database: "bamazon",
});

sqlConnect.connect(function(err) {
    if (err) throw err;
    console.log("connect as id " + sqlConnect + "\n");
    sqlConnect.end();
});