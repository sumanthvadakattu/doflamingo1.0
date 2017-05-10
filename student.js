var mongoose = require('mongoose');
//Defining Schema
var studentSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    cost: {
        type: String,
        required: true
    },

    supplier: {
        type: String,
        required: true
    },

    avail: {
        type: String,
        required: true
    }
});

var stupackage = module.exports = mongoose.model('Product', studentSchema); //Binding schema 

module.exports.addProduct = function(data, callback) {
    stupackage.create(data, callback);
}
module.exports.getProductByField = function(ret, callback) {
    stupackage.find({name:ret}, callback);
}
module.exports.updateProduct = function(name, data, options, callback) {
    var query = {
        name: name
    };
    var update = {
        name: data.name,
        type: data.type,
        cost: data.cost,
        supplier: data.supplier,
        avail: data.avail
    }
    stupackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeProduct = function (name, callback) {
    var query = {
        name: name
    };
    stupackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    stupackage.find(callback);
}

