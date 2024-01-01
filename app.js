require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

// rest of the packages
const morgan = require("morgan");

const cookieParser = require("cookie-parser");

const connectDB = require("./db/connect");


// middleware
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get('/', (req, res) => {
    res.send("e-commerce api");
});

app.get('/api/v1', (req, res) => {
    // console.log(req.cookies);
    console.log(req.signedCookies);
    res.send("e-commerce api");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("Server listening on port " + port);
        })
    } catch (error) {
        console.log(error);
    }

}

start();