import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8000;

import { connectMongoDB } from "./src/config/dbConfig.js";
connectMongoDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routers
import userRouter from "./src/routers/userRouter.js";
// user router to handle user registration and login
app.use("/api/v1/user", userRouter);
//transaction router to handle all transaction related CRUD operation

//uncaught touter rewuest
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "requested resources not found!",
  };
  next(error);
});

//global error handler
app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.status(5000).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost: ${PORT}`);
});
