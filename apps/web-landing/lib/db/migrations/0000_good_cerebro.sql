CREATE TABLE IF NOT EXISTS "contact" (
	"id" integer PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"signup_version" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
