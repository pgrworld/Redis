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

//.23 append cmd: is used to append the value with alredy situated value
EX: set key "rahul"
    append "pentakota"
    get key ==> "rahul pentakota"

// HASHS
//.24 hset cmd: 
EX: hset key field "gowrav"
EX: hget key field
EX: hdel key field

//.25 hexists cmd: is used to know the required is exists or not in the hash field
EX: hset key field "securifi"
    hexists key field
    
//.26 hgetall cmd: is used to get all hset values at a time
EX: hset key field1 "one"
    hset key field2 "two"
    hset key field3 "three"
    hset key field4 "four"
    hgetall key ==> "one" "two" "three" "four" 

//.27 hkeys cmd: is used to get all field names in the hash stored at the key.
EX: hset key field1 "one"
    hset key field2 "two"
    hset key field3 "three"
    hset key field4 "four"
    hset key field5 "five"
    hset key field6 "six"
hkeys key ==> field1 field2 field3 field4 field5 field6

//.28 hlen cmd: is used to know no.of field is there in that hset 
EX: hset key field1 "one"
    hset key field2 "two"
    hset key field3 "three"
    hset key field4 "four"
hlen key  ==> 4 

//.29 hmset cmd: is used to set the values for a different fields with a specified key
EX: hmset key field1 "one" field2 "two" field3 "three" field4 "four" field5 "five"

//.30 hmget cmd: is used to get the required values with a specified key
EX: hmget key field1 field3 field5

//.31 hvals cmd: is used to get all the values in the hash stored at the key.
EX: hvals key


// LISTS: Redis Lists are simply lists of strings, sorted by insertion order. You can add elements in Redis lists in the head or the tail of the list.
//.31 lpush cmd:
EX lpush key one 
   lpush key two
   lpush key three
   lpush key four 
   lpush key five
   
lrange key 0 8   =>one two three four five













