let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function ( req , res ){
     res.sendFile(__dirname + '/index.html');
})


io.on( 'connection' , function(socket){
    console.log('Se aconectado');
})


http.listen( 3000 , function(){
    console.log(' Una persona se a conectado ');
} )





