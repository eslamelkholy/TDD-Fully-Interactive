import express from "express";
import db from "./db";

const app = express();

app.get("/users/:name", async (req, res) => {
  const { name } = req.params;
  const user = await db.getUserByName(name);
  res.json(user);
});

export { app };
