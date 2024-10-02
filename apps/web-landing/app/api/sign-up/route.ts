import { db } from "@/lib/db/db";
import { contact } from "@/lib/db/schema";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { ConfirmWaitlistEmailTemplate } from "transactional";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  email: z.string().email(),
  version: z.string().optional(),
});

export async function POST(req: Request) {
  const data = await req.json();
  const isValid = emailSchema.safeParse(data);

  if (!isValid.success) {
    return NextResponse.json({
      error: isValid.error.errors[0].message,
    });
  }

  // First check if the email is already in the database
  const existingContact = await db
    .select()
    .from(contact)
    .where(eq(contact.email, data.email));

  if (existingContact.length > 0) {
    return NextResponse.json({
      error: "You've already signed up!",
    });
  }

  await db
    .insert(contact)
    .values({
      email: data.email,
      signup_version: data?.version ?? 1,
      id: uuidv4(),
    })
    .returning();

  const { error } = await resend.emails.send({
    from: "Wednesdays Golf App <wednesdays@wednesday-golf.com>",
    to: data.email,
    subject: "You're on the waiting list!!",
    react: ConfirmWaitlistEmailTemplate(),
  });

  if (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json({ success: true });
}
