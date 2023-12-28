const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
require("source-map-support").install();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);

const PORT = process.env.PORT || 3000;
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server Listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
