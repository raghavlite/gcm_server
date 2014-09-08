
/*
 * GET home page.
 */
 
var mongoose = require( 'mongoose' );
var Comment = mongoose.model( 'Comment' );
var User = mongoose.model('User');
exports.index = function ( req, res ){
  Comment.find( function ( err, comments, count ){
    res.render( 'index', {
        title : 'Comment System with Mongoose and Node',
        comments : comments
    });
  });
}; 

exports.create = function ( req, res ){
  new Comment({
   // username : req.body.username,
    content : req.body.comment,
    created : Date.now()
  }).save( function( err, comment, count ){
    res.redirect( '/' );
  });


User.find({},'gcm_id',function(err,res)
{

reg_ids=[];
for(i=0;i<res.length;i++)
{
reg_ids.push(res[i].gcm_id);



}
// reg_ids=res.toArray();

console.log(res[0].gcm_id+'length'+res.length);


});




};


exports.register = function (req, res){


 console.log('thor null');

User.find({  gcm_id: req.body.gcm_id }, function(err, thor) {
  if (err) return console.error(err);


  if(thor.length==0)
  {
    console.log('thor null');
    
  


       
new User({
   // username : req.query.username,
    gcm_id : req.body.gcm_id,
    
  }).save( function( err, comment, count ){
    res.send('1');

console.log("saved");

  });






    res.send('1');
  }
  else
  {

       res.send('0');   
  }

 

  
});










console.log('inside register 1'+req.query.username);



//console.log("yoyo hony"+req.querry.name);

//res.send('hello');
};