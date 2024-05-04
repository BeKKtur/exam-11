import express from "express";
import mongoose from "mongoose";
import config from "./config";
import userRouter from "./routers/user";

const port = 8000;
const app = express();

app.use(express.json());
app.use('/register', userRouter);

const run = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port, () => {
        console.log(`port ${port}`);
    });

    process.on('exit', () => {
        mongoose.disconnect()
    });
}

void run()