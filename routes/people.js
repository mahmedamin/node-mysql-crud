const express=require('express');
const Router=express.Router();
const mysqlConnection=require('../connection');
const { request, response } = require('express');

Router.get('/',(request,response)=>{
    mysqlConnection.query('select * from people',(err,rows,fields)=>{
        if(!err)
            response.send(rows);
        else console.log('error')
    });
});

Router.post('/create',(request,response)=>{
    response.send(request);
});

module.exports=Router;