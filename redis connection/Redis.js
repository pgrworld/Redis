//Before running we have to start the redis-server
//https://www.tutorialspoint.com/redis/redis_keys.htm
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

//.1 set key value
client.set("key1","securifi")
client.get("key1",function(err,res){
	console.log(res);
});

//.2 Del key value
client.del("key1",function(err,res){
	console.log(res);
});

//.3 Exists cmd is used to check whether the key is there or not
client.exists("key",function(err,res){
	console.log(res)
})

//.4 Expire cmd:Redis Expire command is used to set the expiry of a key. After the expiry time, the key will not be available in Redis.
  client.pexpire("key","2000",function(err,res){
	console.log(res)
})

//.5 Keys cmd:Redis KEYS command is used to search keys with a matching pattern.
 client.keys("key*",function(err,res){
	 console.log(res);
 });

//.6 if we want to select the database use cmd: select 1 or select 2 ....upto 16 databases by default

//.7 Move cmd:Redis MOVE command is used to move a key from the currently selected database to the specified destination database.


//.8 Persist cmd: Redis PERSIST command is used to remove the expiration from the key.


//.9 TTL cmd: is used for known the set time

//.10 type key: is used to know datatype stored in the key






