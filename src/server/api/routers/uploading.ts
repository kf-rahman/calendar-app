import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const uploadingRouter = createTRPCRouter({
  createEntry: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { db, session } = ctx;
      const { content } = input;

      const newEntry = await db.entry.create({
        data: {
          content: content,
          userId: session.user.id,
        },
        select: {
          id: true,
        },
      });

      return newEntry;
    })


});