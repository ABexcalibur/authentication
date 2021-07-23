const bodyParser = require('body-parser');
const express = require('express');
const user = require('./routes/user');
const InitiateMongoServer = require('./config/db');

InitiateMongoServer();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/' , (req , res)=>{

    res.json({ message: "API Working"});

});

app.use('/user', user);

app.listen(port, () => {
    console.log(`Server started at PORT ${port}`);
});
