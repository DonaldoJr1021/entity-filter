const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');

app.use(express.json());

app.use(cors())

app.set('port', process.env.PORT || 4000);

app.use(require('./routes/entity.routes'));

server = http.createServer(app);

server.listen(app.get('port'), () =>{
    console.log("Server TEST SOYYO running on port: " + app.get('port'));
})

