require('dotenv').config();
const express = require('express');
const app = express();
const path = required('path');

const customerRoutes = require("./server/routes/user");

app.use(express.json());

app.use(express.static(_dirname + "public"));
app.get('/', (req, res) => res.sendFile(path.join(_dirname, '/public/home.html')))

//CORS middleware 
app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acesss-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization");
    res.header("Acesss-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use("/user", userRoutes );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server started on ${PORT}!'));