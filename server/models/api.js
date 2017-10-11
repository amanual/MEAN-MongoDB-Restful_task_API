const mongoose = require('mongoose');
//create the schema
var ApiSchema = new mongoose.Schema({
    title: String,
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false }
}, { timestamps: true });
// register the schema as a model
var Api = mongoose.model('Api', ApiSchema);