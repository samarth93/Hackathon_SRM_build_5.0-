const express = require('express');
// const userRouter = require('./routes/user');
// const sequelize = require('./config/database');

const app = express();
app.use(express.json());
// app.use('/users', userRouter);

// sequelize.sync().then(() => {
//   app.listen(3001, () => {
//     console.log('Server is running on port 3001');
//   });
// });
 
app.get("/",function(req,res){
    res.send("Hello World");
})

app.listen(8080);