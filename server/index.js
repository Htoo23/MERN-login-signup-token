const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.listen(4000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server Started Successfully.");
    }
  });

// Updated mongoose connection
mongoose.connect("mongodb+srv://htooaunglin2342002:rBAqZ12DmlQShfSh@mern.vddsb.mongodb.net/jwt") // Use `127.0.0.1` for IPv4
    .then(() => {
        console.log("DB Connection Successfully");
    })
    .catch((err) => {
        console.error("Database connection failed:", err.message);
    });

    app.use(
        cors({
          origin: ["http://localhost:3000"],
          methods: ["GET", "POST"],
          credentials: true,
        })
      );
      app.use(cookieParser());
      
      app.use(express.json());
      app.use("/", authRoutes);
