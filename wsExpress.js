const express = require('express')
const app = express();

require('dotenv').config();

console.log()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({id:1, name:"Pedro"})
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + "/public/404.html");
});



app.listen(process.env.PORT)