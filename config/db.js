require('dotenv').config();
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectDb = async () => {
    try {
        console.log('MONGO_URI---', MONGO_URI);
        await mongoose.connect(MONGO_URI);

        // await mongoose.connect(MONGO_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     ssl: true,
        //     sslValidate: false
        // });
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ Connection error:", err);
        process.exit(1);
    }
}

module.exports = connectDb;

// MONGO_URI=mongodb+srv://ishimdar:Mongo@123@cluster0.xxxxx.mongodb.net/AKSDatabase