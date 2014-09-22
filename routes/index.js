
/*
 * GET home page.
 */
 
var mongoose = require( 'mongoose' );
var Comment = mongoose.model( 'Comment' );
var User = mongoose.model('User');
 var gcm = require('node-gcm');
var sender = new gcm.Sender('AIzaSyD0MJ71h3Q91xX2_c-vabwxdSxKdm-iPD4');




exports.index = function ( req, res ){
  Comment.find( function ( err, comments, count ){
    res.render( 'index', {
        title : 'UDGOSH NOTIFICATION',
        comments : comments
    });
  });
}; 

exports.create = function ( req, res ){
  new Comment({
   username : req.body.username,
    content : req.body.comment,
    created : Date.now()
  }).save( function( err, comment, count ){
    res.redirect( '/' );
  });

reg_ids=[];

User.find({},'gcm_id',function(err,res)
  {


  for(i=0;i<res.length;i++)
  { 
  reg_ids.push(res[i].gcm_id);

  console.log(i+'th entry is '+res[i].gcm_id+'\n');

  }
// reg_ids=res.toArray();


console.log("trying to send  "+req.body.username);
var message = new gcm.Message();


message.addData('message',req.body.comment+" <"+req.body.username+">");




//message.delayWhileIdle = true;
//message.timeToLive = 4;
//


//message.addDataWithKeyValue('message',req.body.comment);


sender.send(message, reg_ids, 4, function (err, result) {
    console.log(result);




});






});

};


exports.register = function (req, res){


 console.log('\n\n\nnew entry\nentered register function');

User.find({  gcm_id: req.body.gcm_id }, function(err, thor) {
  if (err) return console.error(err);


console.log('inside the find function');



  if(thor.length==0)
  {
    console.log('id not found, storing id');
    
  


       
new User({
   // username : req.query.username,
    gcm_id : req.body.gcm_id,
    
  }).save( function( err, comment, count ){
    res.send("1op");

console.log("saved");

  });






    res.send("1op0");
  }
  else
  {

          console.log('id present');
 
       res.send("1op0");   
  }

 

  
});










console.log('inside register '+req.body.gcm_id);



//console.log("yoyo hony"+req.querry.name);

//res.send('hello');
};