var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animationSchema = new Schema({
    name:{type:String},
    total:{type:Number},
    source_url:[String]
})

module.exports = mongoose.model('Animation',listSchema);