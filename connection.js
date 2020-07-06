const mysql=require('mysql');

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud',
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(err)
        console.log('connection error');
    else
        console.log('connection secceed');
});

module.exports=mysqlConnection;