const express=require('express');


const app=express();
const PORT=5000;

const expressConfig=require('./config/expressConfig');
const handlebarsConfig=require('./config/handlebarsConfig');
const routes=require('./routes');


//app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(express.static(path.))


expressConfig(app);
handlebarsConfig(app);
app.use(routes);



app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}...`));