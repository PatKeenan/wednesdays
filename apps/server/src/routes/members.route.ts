import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createMemberSchema, MemberSchema } from "~/schemas/members.schema";

const fakeMembers: MemberSchema[] = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  name: `John Doe ${i}`,
}));

export const membersRoute = new Hono()
  .get("/", (c) => {
    return c.json(fakeMembers);
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const member = fakeMembers.find((m) => m.id === id);
    if (!member) {
      c.notFound();
    }
    return c.json(member);
  })
  .post("/", zValidator("form", createMemberSchema), (c) => {
    const validForm = c.req.valid("form");
    return c.json({ message: `Hello from members route with id: s}` });
  });
