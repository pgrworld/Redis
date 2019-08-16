//Before running we have to start the redis-server
var redis = require("redis");
var client = redis.createClient();

client.on("connec", function(){
	console.log("connected")
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

 client.set("key","redis")    //redis.print==>reply:ok(optional)
 client.expire("keys", 2)

client.get("key",function(err,reply){
	console.log(reply)
})
