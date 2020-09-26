import express from "express";
import db from "./db";

const app = express();

app.get("/users/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const user = await db.getUserByName(name);
    if (!user) return res.status(404).send();
    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export { app };
