import { prisma } from "../db";

export const create = async ({ name }: { name: string }) => {
  const todo = await prisma.todo.create({
    data: {
      name: name,
    },
  });

  return todo;
};
