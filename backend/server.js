const app = require('./app');
const dotenv = require('dotenv');

//config
dotenv.config({path:'config/config.env'});


app.listen(process.env.PORT, ()=>{
    console.log(`server running on ${process.env.PORT}`);
})