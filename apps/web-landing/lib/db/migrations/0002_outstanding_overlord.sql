ALTER TABLE "contact" ADD COLUMN "contact_subject" text DEFAULT 'General Inquiry';--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "contact_message" text;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "contact_name" text;