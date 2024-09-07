import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const membersRoute = new Hono()
  .get("/", (c) => {
    return c.json({ message: "Hello from members route" });
  })
  .post(
    "/",
    zValidator(
      "form",
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
      })
    ),
    (c) => {
      const validForm = c.req.valid("form");
      return c.json({ message: `Hello from members route with id: s}` });
    }
  );
