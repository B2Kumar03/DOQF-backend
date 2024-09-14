const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();


const itemRoutes = require("./routes/itemRoutes");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", itemRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    `${process.env.DBURI}/inventory`
  )
  .then(() => console.log("MongoDB connected"));

const PORT =process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
