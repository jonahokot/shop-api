const express = require('express'),
mongoose = require('mongoose'),
config = require('./config/db')
staffRoutes = require('./routes/staffRoutes');

const app = express();

mongoose.connect(config.database,{useNewUrlParser:true});
const db = mongoose.connection;
db.once('open',()=>{
    console.log('Connected to MongoDB');
});
db.on('error',(err)=>{
    console.error(err);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',staffRoutes)






app.listen(3002,()=>console.log('Listening on Port 3002'));
