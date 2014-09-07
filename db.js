var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Comment = new Schema({
    username : String,
    content  : String,
    created  : Date
});
 
var User = new Schema({
    username : String,
    gcm_id  : String
});




mongoose.model( 'Comment', Comment );
 mongoose.model( 'User', User );
mongoose.connect( 'mongodb://localhost/express-comment' );