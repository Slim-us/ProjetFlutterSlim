import dotenv from "dotenv";
import express  from "express";
import cors from 'cors';
import morgan from 'morgan';
import stakingRoutes from "./routes/StakingRoute.js";
import userRoutes from "./routes/UserRoute.js";
import mongoose from "mongoose"; 

dotenv.config();
const app =express()
const port=process.env.PORT;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log("MongoDB connected to staking database"))
  .catch(err => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => {
    res.send("hello world !");
  });

  app.use("/staking", stakingRoutes);
  app.use("/user", userRoutes);


    
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  