import { z } from "zod";

export const memberSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const createMemberSchema = memberSchema.omit({ id: true });

export type MemberSchema = z.infer<typeof memberSchema>;
export type CreateMemberSchema = z.infer<typeof createMemberSchema>;
