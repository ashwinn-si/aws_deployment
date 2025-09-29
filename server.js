const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express();
app.use(morgan("dev"))
app.use(cors("*"))
dotenv.config();

const PORT = parseInt(process.env.PORT) || 3000

app.get("/are-you-alive", (req, res) => {
  res.json({
    message: "vanakooo da from server"
  })
})

app.listen(PORT, () => {
  console.log("server is running at port " + PORT)
})