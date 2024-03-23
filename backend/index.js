import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
// const corsOptions = {
//        origin: true,
//        credentials: true,
// }
//database connection


app.get("/", (req, res) => { res.send("api is working"); });

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//for testing 
app.get("/",(req,res)=>{
          res.send("api is working");
});
app.listen(port, () => {
        
       console.log('server listening on port', port);

})