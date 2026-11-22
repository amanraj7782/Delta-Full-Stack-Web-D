const express = require("express");
const app = express();

const body-Parser=require("bodyparser");
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log("code is correct");
});

app.get("/", (request, response) => {
    response.send("this is home page"); // Corrected to response.send()
});

app.post("/app",(request,response)=>{
    const{brand,name}=body.response;
    console.log(brand);
    console.log(name);
    response.send("everythisbg is hgoog");
})

