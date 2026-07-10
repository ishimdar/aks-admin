require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const productRoute = require("./routes/productRoutes");
const imageRoute = require("./routes/imageRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const unitRoutes = require("./routes/unitRoutes");

const PORT = process.env.PORT || 5000;

const app = express();
// Allow all origins (for development)
app.use(cors());

app.use(express.json());

connectDb();

app.use("/api/v1", productRoute);
app.use("/api/v1", imageRoute);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", unitRoutes);


app.listen(PORT, () => console.log("🚀 Server running on http://localhost:5000"));