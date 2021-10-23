const express = require('express');
const cors = require('cors');
const setup = require('./model/dbSetup');
// const router = require('./routing/route');

const app = express();

app.use(cors());

// app.use(requestLogger);
// app.use('/',router);
// app.use(errorLogger);

app.use('/setupDb',(req,res,next)=>{
    setup.setupDb().then((result)=>{
        res.send(result)
    }).catch(error=>{
        next(error)
    })
});

app.listen(1050,()=>{
    console.log("App listening @ 1050");
});

module.exports = app;