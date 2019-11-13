// Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

// Create the connection to sql database
var connection = mysql.createConnection({
    host: 'localhost',

    // Set port number
    port: 3306,

    // Set user name
    user: 'root',

    // Set password
    password: 'Otto22.rents',

    // Set database
    database: 'bamazon_db'

});

// Connect to mysql server and sql database
connection.connect(function(err){
    if(err) throw err;
    console.log('-----------------------------------');
    console.log('Open SQL Connection:')
    console.log('connected as id ' + connection.threadId);
    console.log('-----------------------------------');
    showProducts();
});


// function to show list of products from bamazon_db
function showProducts(){
    connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err;
        console.log('\nWelcome to Bamazon:')
        for (var i = 0; i < res.length; i++){
            console.log('\n' + res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].price);
        }
        console.log('\n-----------------------------------');
        buyProduct();
    });
}

// Prompt user for item id and amount of item they would like to purchase
function buyProduct(){
    connection.query('SELECT * FROM products', function(err, res){
        if (err) throw err;

        console.log('\nPlease answer the following questions based off the list above.')
        inquirer.prompt([
            {
                name: 'id',
                type: 'input',
                message: '\nPlease enter the item ID of the item you would like to purchase:'
            },
            {
                name: 'units',
                type: 'input',
                message: '\nHow many units of the product would you like to purchase?'
            }
        ]).then(function(answer){
            // console.log(answer);

            // Push user results to checkProductAvail function
            checkProductAvail(answer.id, answer.units);

        });
    });
}

// Check to see if product is available based off how many units the user specified
function checkProductAvail(arr1, arr2){
    connection.query('SELECT * FROM products WHERE item_id = ' + arr1, function(err, res){
        if (err) throw err;
        // console.log(res);

        for (var i = 0; i < res.length; i++){
            var quantity = res[i].stock_quantity;
            var price = res[i].price;
            if (arr2 <= quantity){
                // console.log('Success!')
                quantity -= arr2;
                var total = price * arr2;
                // console.log(total);
                // console.log(quantity);
                updateProductAvail(quantity, arr1, total);
            } else {
                console.log('Insufficient quantity!');
                showProducts();
            }
        }

    });        
}

// Update the database with stock_quantity after purchase
function updateProductAvail(arr1, arr2, arr3){
    connection.query('UPDATE products SET stock_quantity = ' + arr1 + ' WHERE item_id= ' + arr2, function(err, res){
        if(err) throw err;
        // console.log(res);
        console.log('\n-----------------------------------');
        console.log('Your order has been processed. Total price: $' + arr3);
    });
    connection.end();
}