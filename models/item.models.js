module.exports = (sequelize, Sequelize) => {

    const Item = sequelize.define("itemsdb", {
        ItemID: {
            type: Sequelize.STRING
        },
        ItemName: {
            type: Sequelize.STRING
        },
        Stock: {
            type: Sequelize.STRING
        },
        Price: {
            type: Sequelize.STRING
        },
        Location: {
            type: Sequelize.STRING
        },
        
    
    })

    return Item

}