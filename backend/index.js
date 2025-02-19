import express from "express";
import connectDB from "./config/db.js";
import cors from "cors"
import 'dotenv/config';


import { router as puppyRouter } from "./routes/puppyRoutes.js";
import { router as userRouter } from "./routes/userRoutes.js"; 
import {router as formRouter} from "./routes/formRoutes.js"
import { router as paymentRouter } from "./routes/paymentRoutes.js";

const app= express();
app.use(express.json())
app.use(cors());


connectDB();


app.use("/api/puppies", puppyRouter);
app.use("/api/users", userRouter)
app.use("/api/form", formRouter); 
app.use("/api/payment", paymentRouter);



app.listen(3001, () =>(
     console.log("server connesso, aperta porta 3001")
))




