const db = require('../models');
const Item = db.items;

exports.insert = async (input) =>{
    await Item.create(input);
}