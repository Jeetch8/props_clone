import express from "express";
import { AppDataSource } from "./config/data-source";
import { Users } from "./api/v1/entity/User";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = new Users();
  await userRepository.save(user);
  const userFound = await userRepository.find();
  res.status(200).json({ user: userFound });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
