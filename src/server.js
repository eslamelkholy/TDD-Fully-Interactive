import express from "express";
import db from "./db";

const app = express();

app.get("/users/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const user = await db.getUserByName(name);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { app };
