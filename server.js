const express =require("express");
const mongoose =require("mongoose");
const cors = require("cors");

const app=express();
const PORT =5000;

app.use(express.json());
app.use(cors());

mongoose
.connect(
    "mongodb+srv://purusottampandey:admin@cluster0.q69dl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
 {}
)
.then(() => {
    console.log("CONNECTED TO THE DATABASE");
}
);
const userRoute=require("./user.route");
const todoRoute=require("./todo.route");
app.use("/todo",todoRoute);
app.use("/user",userRoute);


app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
}
);

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
}
);