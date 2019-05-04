var inquirer = require("inquirer");

function chooseItem() {
    inquirer
        .prompt({
            type: "rawlist",
            name: "productId",
            message: "Please select the product ID number",
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
            switch (answer.action) {
            case "1 - Pentel Energel Pens":
            howMany();
            break;

            case "2 - Oil Filter Element":
            // function();
            break;

            case "3 - Leather Belt":
            // function();
            break;

            case "4 - Climbing Chalk":
            // function();
            break;

            case "5 - Addidas Campus Sneakers":
            // function();
            break;

            case "6 - Hydration Backpack":
            // function();
            break;

            case "7 - Aloe Vera Plant":
            // function();
            break;

            case "8 - Bluetooth Speaker":
            // function();
            break;

            case "9 - Cast-Iron Pan":
            // function();
            break;

            case "10 - Chromebook":
            // function();
            break;
        }
    });
};

function howMany() {
    var productQuery = "SELECT * FROM products WHERE item_id = 1";
    sqlConnect.query(productQuery, )
};
exports.chooseItem = chooseItem;
