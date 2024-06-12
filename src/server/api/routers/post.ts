import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure.mutation(async () => {
    console.log("multiline log:\nnext line");
    console.log(
      `object log: ${JSON.stringify({ foo: "foo", bar: "bar" }, null, 2)}`,
    );
    try {
      throw new Error("foo");
    } catch (e) {
      // @ts-expect-error any
      console.error(e.stack);
    }
    try {
      throw new Error("bar");
    } catch (e) {
      console.error(JSON.stringify(e));
    }
  }),
});
