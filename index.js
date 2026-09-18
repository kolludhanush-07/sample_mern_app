let express=reqire('express');
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');
let app=express();
//localhost:3000/
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes)
//localhost:3000/abouts
//run the server in port 3000
app.listen(3000,()=>{
    console.log("server running on port 3000")
})