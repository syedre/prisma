import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hi  guys ");
});

app.get("/users", async (req, res) => {
  const users = await prisma.users.findMany();
  return res.json(users);
});

app.get("/prisma", async (req, res) => {
  try {
    const users = await prisma.prisma.findMany();
    return res.json(users);
  } catch (err) {
    return res.json(err);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server os running on a  ${PORT}`));
