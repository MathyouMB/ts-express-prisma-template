import { prisma } from ".";

const seed = async () => {
  const todo = await prisma.todo.create({
    data: {
      name: "Todo",
    },
  });
};

seed();
