# bamazon
Welcome to the Bamazon application! Bamazon is an application that allows its users to query a table of products. Information about the products that is available include the product's name, it's sale price and the amount of the product currently available for purchase. 

Bamazon queries a database (https://github.com/GC0728/bamazon/blob/master/assets/images/productTable_db-default.PNG) that contains ten available products for purchase. The user is able to query this product using a simple interface. This interface can either be scrolled through each item or selected by entering a corresponding number from 1 to ten (https://github.com/GC0728/bamazon/blob/master/assets/images/itemId-select.PNG) and (https://github.com/GC0728/bamazon/blob/master/assets/images/itemId-select2.PNG).

After selecting the product the user would like to purchase the user is then prompted to enter how much of that product they would like to purchase (https://github.com/GC0728/bamazon/blob/master/assets/images/product-quantity-input.PNG).

Bamazon then queries the database for the amount of the product to be ordered and then returns the total sale price to the user (https://github.com/GC0728/bamazon/blob/master/assets/images/purchase-price.PNG). After the order is placed the database is updated to reflect the new stock quantity of the product (https://github.com/GC0728/bamazon/blob/master/assets/images/stockQuantity-tableUpdate.PNG).

Finally, a fail safe has been implemented to ensure that an order isn't accidently placed when there is not of of the requested product in stock to fulfill the user's order (https://github.com/GC0728/bamazon/blob/master/assets/images/insufficient-quantity.PNG).



