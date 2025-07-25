const express= require('express')
const cors= require('cors')
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app= express()
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//User Routes
app.use("/api/users", require("./routes/userRoutes"));

//Product Routes
app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);