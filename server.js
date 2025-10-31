import "dotenv/config";

import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.send("Hi  guys ");
});

app.listen(PORT, () => console.log(`server os running on  ${PORT}`));
