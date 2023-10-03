const express= require("express");
const app= express();
const cors = require("cors")
app.use(cors())

const bodyParser= require('body-parser')
const morganApiLogger= require("morgan")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morganApiLogger('dev'));

const routes= require('./routes')(express.Router(), app)
console.log(routes)
app.use('/', routes)
app.listen(5000, function(){
    console.log("Port is running 5000")
});


// let xmlhttprequest= new XMLHttpRequest();

// xmlhttprequest.onreadystatechange= function(evt){
//     if(this.readyState == 4 && this.status== 200){
//         let data= JSON.parse(records)
//        if(data.status ==200){
//         renderHtml(data.response)
//        }else{
//         alert("There is something went wrong")
//        }
//     }

// }

// xmlhttprequest.open("POST", "http://localhost:5000/products/getall");
// xmlhttprequest.send();

// function renderHtml(records){
//     console.log(records)
// }





