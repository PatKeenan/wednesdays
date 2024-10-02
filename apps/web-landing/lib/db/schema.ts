import { sql } from "drizzle-orm";
import {
  integer,
  text,
  pgTable,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

// Create a drizzle schema for the signup form on the landing page. It should have the following columns:
// Also include which version of the landing page the user signed up on

export const contact = pgTable("contact", {
  id: varchar("id", { length: 255 }).primaryKey(),
  email: text("email").notNull(),
  signup_version: integer("signup_version").notNull().default(1),
  created_at: timestamp("created_at").default(sql`now()`),
  contact_subject: text("contact_subject").default("General Inquiry"),
  contact_message: text("contact_message"),
  contact_name: text("contact_name"),
  from_contact_page: boolean("from_contact_page").default(false),
});

export type Contact = typeof contact.$inferSelect;
export type NewContact = typeof contact.$inferInsert;
