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

connection.connect(function(err){
    if(err) throw err;
    console.log('-----------------------------------');
    console.log('Open SQL Connection:')
    console.log('connected as id ' + connection.threadId);
    console.log('-----------------------------------');
    showProducts();
});



function showProducts(){
    connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err;
        console.log('\nProducts:')
        for (var i = 0; i < res.length; i++){
            console.log('\n' + res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].price);
        }
        console.log('\n-----------------------------------');
        buyProduct();
    });
}

function buyProduct(){
    connection.query('SELECT * FROM products', function(err, res){
        if (err) throw err;

        inquirer.prompt([
            {
                name: 'id',
                type: 'input',
                message: 'Please enter the item ID of the item you would like to purchase:'
            },
            {
                name: 'units',
                type: 'input',
                message: 'How many units of the product would you like to purchase?'
            }
        ]).then(function(answer){
            // console.log(answer);
            checkProductAvail(answer.id, answer.units);

            
        });
    });

}

function checkProductAvail(arr1, arr2){
    connection.query('SELECT * FROM products WHERE item_id = ' + arr1, function(err, res){
        if (err) throw err;
        console.log(res);

        for (var i = 0; i < res.length; i++){
            var quantity = res[i].stock_quantity;
            if (arr2 <= quantity){
                console.log('Success!')
            } else {
                console.log('Insufficient quantity!')
            }
        }

    }); 
        
}