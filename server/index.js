import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateAIImage.js";

dotenv.config();

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded( {extended: true} ));

//Error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something Went Wrong!";

    return res.status(status).json({
        success: false,
        message,
        status,
    });
});

app.use("/api/post", PostRouter );
app.use("/api/generateImage", GenerateImageRouter);

//Default Get
app.get("/" , async (req, res) => {
    res.status(200).json({
        message: "Hello, Welcome to ImaginAIry",
        description : "This is an OpenAI Api based Image generation website"
    });
});


//MongoDB connection function - Basic Default function
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB Database"))
    .catch((err) => {
        console.error("Failed to connect to DB");
        console.error(err);
    });
};

//Server Listening
const startServer = async () => {
    try {
        connectDB();
        app.listen( port, () => {
            console.log(`The server has started on ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();