require('dotenv').config();
const express = require("express");
const connectDb = require("./config/db");
const productRoute = require("./routes/productRoutes");


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

connectDb();

app.use("/api/v1", productRoute);


app.listen(PORT, () => console.log("🚀 Server running on http://localhost:5000"));