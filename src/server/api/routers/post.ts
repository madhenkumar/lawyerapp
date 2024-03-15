import { z } from "zod";
import { Resend } from 'resend';
import { env } from "~/env";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const resend = new Resend(env.RESEND_API_KEY);

export const postRouter = createTRPCRouter({
  testemail: publicProcedure
      .input(z.object({name:z.string(),email:z.string(),phno:z.string()}))
      .mutation(async({input})=>{
      try {
          const {data,error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'rmadhenkumar@gmail.com',
            subject: `Contact request from ${input.name}`,
            html:`<p>${input.name} has sent a request,</p>
                  <p>Their email is: ${input.email}</p>
                  <p>Their phone number is: ${input.phno}</p>`
          });
          return data; 
      } catch (error) {
        console.error("Error using resend:", error);
    }
    }
    ),


  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
