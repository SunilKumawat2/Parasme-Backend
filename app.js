require("dotenv").config();
const connect = require("./config/dbconnection");
const express = require("express");
const cors = require("cors");
const Router = require("./routes/Router");
const http = require("http")
const app = express();
app.use(express.json());
app.use(express.static("uploads"));
app.use(cors());

const port = process.env.PORT ; // Use PORT environment variable or default to 4000
const server = http.createServer(app); 

// Routes
app.use("/parasme/api", Router);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
