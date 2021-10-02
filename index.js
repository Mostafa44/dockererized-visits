var express = require( 'express');
var  redis=  require ('redis');
var process= require('process');

const app= express();
const redisClient= redis.createClient({
    host:'redis-server'
});
redisClient.set('visits',0);


app.get('/', (req, res)=>{
    process.exit(0);
    redisClient.get('visits', (err,visits)=>{
        res.send(`number of visits is ${visits}`);
        redisClient.set('visits', parseInt(visits)+1);
    });
   
});

app.listen('8081',()=>{
    console.log('listening on port 8081');
})
