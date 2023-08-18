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


        // Update

        
        // Delete

    }
})();