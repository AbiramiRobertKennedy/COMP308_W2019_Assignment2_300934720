/*
JS - Contact
Abirami Robert Kennedy
300934720
3/30/2019
*/
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);