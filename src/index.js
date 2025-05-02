import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT
//mounted routes here

app.listen(PORT,(req,res)=>{
    console.log('server running at ',PORT);
});




