var network=require('net')
var client=network.connect({port:5300},function(){
    console.log('connected to server');});
client.on('data',function(data){
    console.log('server response:'+data.toString());
    client.end();
});
client.on('end',function(){
    console.log('diconnected from server');
    
});