const db = require('./models');
const prompt = require('prompt-sync')({sigint: true});
const ctl = require('./controllers/itemsControllers');


var isRunning = true;

(async () => {
    
    
    while (isRunning) {
        console.clear();

       
        console.log('================');
        console.log('1. Add a Stock');
        console.log('2. List Stocks');
        console.log('3. Update Stock');
        console.log('4. Delete Stock');
        console.log('5. Exit');

        let input = prompt('Please input menu ');
    
        // insert
        if(Number(input) === 1){
            let itemId = prompt('Input Id Barang : ');
            let itemName = prompt('Input Nama Barang : ');
            let stock = prompt('Jumlah Barang : ');
            let price = prompt('Harga Barang : ');
            let location = prompt('Lokasi : ');

    
            const items = {
                ItemId : itemId,
                ItemName : itemName,
                Stock : stock,
                Price : price,
                Location : location
            };          
            await ctl.create(items);
        }

        // Select
        else if (Number(input) === 2) {
            const stocks = await ctl.getAll();
            console.log('List of Stocks:');
            stocks.forEach((stock) => {
              console.log(
                `ID: ${stock.ItemId}, Name: ${stock.ItemName}, Stock: ${stock.Stock}, Price: ${stock.Price}, Location: ${stock.Location}`
              );
            });
            prompt('Press Enter to continue...');
          }
      
          // Update
          else if (Number(input) === 3) {
            let itemId = prompt('Input ID of the Stock to update: ');
            let newData = {};
      

            newData.ItemName = prompt('Input New Name for the Stock: ');
            newData.Stock = prompt('Input New Stock Quantity: ');
            newData.Price = prompt('Input New Price: ');
            newData.Location = prompt('Input New Location: ');
      
            await ctl.update(itemId, newData);
          }
      
          // Delete
          else if (Number(input) === 4) {
            let itemId = prompt('Input ID of the Stock to delete: ');
            await ctl.delete(itemId);
          }
      
          // Exit
          else if (Number(input) === 5) {
            isRunning = false;
          }
        }
      })();