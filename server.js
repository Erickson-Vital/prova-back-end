const express = require("express");
const routes = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);


app.listen(3333, () =>{
  console.log('Server is running in port 3333');
})