const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "healthy" });
});

app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Nsikak Sunday",
    email: "nsikakmbre@gmail.com",
    github: "https://github.com/Nsix6/",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
