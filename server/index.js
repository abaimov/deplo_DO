const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, "build")));

app.get("/api/products", function (req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Nokia",
    },
    {
      id: 2,
      name: "Motorola",
    },
  ]);
});

app.listen(port);
