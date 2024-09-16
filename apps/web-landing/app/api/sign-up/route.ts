import { db } from "@/lib/db/db";
import { contact } from "@/lib/db/schema";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

const emailSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  const data = await req.json();
  const isValid = emailSchema.safeParse(data);

  // First check if the email is already in the database
  const existingContact = await db
    .select()
    .from(contact)
    .where(eq(contact.email, data.email));

  console.log({ existingContact });

  if (existingContact.length > 0) {
    return NextResponse.json({
      error: "You've already signed up!",
    });
  }

  await db
    .insert(contact)
    .values({ email: data.email, signup_version: 1, id: uuidv4() })
    .returning();

  if (!isValid.success) {
    return NextResponse.json({
      error: isValid.error.errors[0].message,
    });
  }
  return NextResponse.json({ success: true });
}
