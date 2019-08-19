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

//.11 getrange cmd: is used to get the substring from the string value
 
//.12 getset cmd: is used to set the new value and returns the old value

//.13 mget cmd: is used to get the values of all spicified keys
EX: set key1 "hello"
    set key2 "haiii"
    set key3 "haaaa"
    set key4 "hoooo"
mget key1 key2 key3 key4

//.14 setex cmd: is used to set the value with a specified time 
EX: setex key 10 "securifi embedded systems"

//.15 setnx cmd: is used to set the value and that value can't be overcome 
EX: setnx key "checking data"

//.16 strlen cmd: is used to know the length of the string that means key value length
EX: strlen key1

//.17 mset cmd: is used to set the multiple key value pairs at a time 
EX: mset key1 "one" key2 "two" key3 "three'

//.18 mget cmd: is used to get the multiple key values at a time
EX: mget key1 key2

//.19 incr cmd: is used to increment the one value 
EX: set key 100
    incr key
    get key ==>101

//.20 incrby cmd: is used to increment the value upto our required position 
EX: set key 200
    incby key 50
    get key ==>250

//.21 decr cmd: is used to decrement the one value position 
EX: set key 100
    decr key
    get key ==>99

//.22 decrby cmd: is used to decrement the value upto our required position
EX: set key 200
    decrby key 25
    get key  ==>175











