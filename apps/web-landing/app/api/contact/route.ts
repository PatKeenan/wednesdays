import { db } from "@/lib/db/db";
import { contact } from "@/lib/db/schema";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

const emailSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  subject: z.string(),
  message: z.string(),
});

export async function POST(req: Request) {
  const data = await req.json();
  const isValid = emailSchema.safeParse(data);

  if (!isValid.success) {
    return NextResponse.json({
      error: isValid.error.errors[0].message,
    });
  }

  await db
    .insert(contact)
    .values({
      email: data.email,
      signup_version: data?.version ?? 1,
      id: uuidv4(),
      from_contact_page: true,
      contact_subject: data.subject,
      contact_message: data.message,
      contact_name: data.name,
    })
    .returning();

  return NextResponse.json({ success: true });
}
