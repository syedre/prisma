import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hi  guys ");
});

app.get("/users", async (req, res) => {
  const users = await prisma.users.findMany();
  return res.json(users);
});

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server os running on a  ${PORT}`));
