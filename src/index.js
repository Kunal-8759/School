const express = require('express');

const { PORT }  = require('./config/serverConfig');
const apiRouter =require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRouter);

app.listen(PORT, async() => {
    console.log(`Successfully started the server on PORT : ${PORT}`); 
});
