// JAMES BOND PRODUCT API
const express = require("express")
const serverless = require("serverless-http")
const mysql=require("mysql")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


const connection=mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // *** LEAVE THIS. THIS IS THE DATABASE NOT THE TABLE ***
  database:"todoapplication" 
});

//connection.connect()


//Create new entries
app.post("/tasks", function(request, response){
  var string;
  const data = request.body;
  if (data.mode==="newCustomer") {string='INSERT INTO jb_customer SET? '}
  if (data.mode==="newProduct") {string='INSERT INTO jb_product SET? '}
  
  delete data.mode;
  connection.query(string, data, function (error, results, fields){
    if (error) {
      console.log("Error saving new data",error);
      response.status(500).json({
        error: error
      });
    }
    else {
      response.json({
        taskId: results.insertId});
    }
  });
});


//UPDATE tasks
app.put("/tasks/:id", function (request, response) {
  const customer = request.body

        connection.query("UPDATE jb_customer SET firstName = '"+customer.firstName+"', secondName = '"+customer.secondName+"', address1 = '"+customer.address1+"', address2 = '"+customer.address2+"', address3 = '"+customer.address3+"', address4 = '"+customer.address4+"', address5 = '"+customer.address5+"', email = '"+customer.email+"', password = '"+customer.password+"' WHERE email = '"+customer.oldEmail+"'" , function(err, result, fields) {
    
    
    
      if (err!==null) {
      console.log("Something went wrong updating the task", err)
      response.send(500)
    } else {
    response.send ("Item Updated")}
  })
})


// Fetch tasks
app.get("/product", function (request, response) {
  connection.query("SELECT * FROM jb_product", function(err,result,fields) {
 if (err!==null) {
   console.log("error fetching tasks", err)
   response.send(500)
 } else
    response.json({ product:result })
  })
})


//Delete tasks
app.delete("/tasks/:id", function (request, response) {
  const num=request.params.id
  connection.query("DELETE FROM Tasks WHERE num = ?", [num], function(err, result, fields) {
    if (err!==null) {
      console.log("Something went wrong deleting the task", err)
      response.send(500)
    } else {
    response.send ("Item Deleted")}
  })
})


module.exports.handler = serverless(app)

// endpoints:
//   GET - https://rxfg014ygk.execute-api.eu-west-2.amazonaws.com/dev/product
//   DELETE - https://rxfg014ygk.execute-api.eu-west-2.amazonaws.com/dev/tasks/{ids}
//   POST - https://rxfg014ygk.execute-api.eu-west-2.amazonaws.com/dev/tasks
//   PUT - https://rxfg014ygk.execute-api.eu-west-2.amazonaws.com/dev/tasks/{ids}
// functions:
//   tasks: james-bond-product-dev-tasks

// to deploy:- serverless deploy function --function tasks
// if just the tasks file has been update you can use 'serverless deploy' on its own
  // host: "todoapplication.cfwgd2eitm3t.eu-west-2.rds.amazonaws.com",
  // user:"root",
  // password:"bradford1",
