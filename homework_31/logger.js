const options={
    logDirectory:'./logs',
    fileNamePattern:'<DATE>.log',
    dateFormat:'DD.MM.YYYY'
}

module.exports=require('simple-node-logger').createRollingFileLogger()