var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
    name:{type:String,unique:true},
    total:{type:Number},
    img_url:{type:String,unique:true},
    source_url:[String]
})

module.exports = mongoose.model('List',listSchema);