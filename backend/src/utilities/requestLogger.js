const fs = require('fs');

const requestLogger = (req,res,next)=>{
    fs.appendFile('RequestLogger.txt',new Date()+" "+ req.method+" "+req.url,function(error){
        if(error){
            next(error);
        }
    })
    next();
}

module.exports = requestLogger;