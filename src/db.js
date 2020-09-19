import { MongoClient } from "mongodb";

export const getUserByName = async (name) => {
  const client = await MongoClient.connect("mongodb://localhost:27017/TEST_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("TEST_DB");
  const result = await db.collection("users").findOne({ name });
  client.close();
  return result;
};
