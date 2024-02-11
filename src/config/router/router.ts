import express, { Request, Response } from "express";
import { TodoService } from "../../app";

const router = express.Router();

const getAPIRoot = async (_: Request, response: Response) => {
  response.json({
    message: "API - 👋",
  });
};

const createTodo = async (request: Request, response: Response) => {
  const name = request.body.name;
  const result = await TodoService.create({ name: name });

  response.json({
    body: result,
  });
};

router.get("/", getAPIRoot);
router.post("/todos", createTodo);

export default router;
