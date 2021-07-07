const mysql=require('mysql2')

const mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user: "jisan",
    password:"1234",
    database:"assignment",
    multipleStatements: true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected")
    }
    else {
        console.log(err)
    }
})

module.exports=mysqlConnection