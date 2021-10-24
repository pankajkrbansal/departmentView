const express = require('express');
const cors = require('cors');
const setupdb = require('./model/dbSetup');
const router = require('./routing/routing');
const requestLogger = require('./utilities/requestLogger');
const errorLogger = require('./utilities/errorLogger')
const app = express();

app.use(cors());
app.use(express.json())
app.use(requestLogger);
app.use('/',router);
app.use(errorLogger);

app.use('/setupDb',(req,res,next)=>{
    setupdb.setupDb().then((result)=>{
        res.send(result)
    }).catch(error=>{
        next(error)
    })
});

app.listen(1050,()=>{
    console.log("App listening @ 1050");
});

module.exports = app;