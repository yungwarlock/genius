import { nanoid } from "nanoid";
import { timestamp, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  username: varchar({ length: 255 }).notNull(),
  id: varchar().primaryKey().$defaultFn(nanoid),
  createdAt: timestamp().notNull().defaultNow(),
  password: varchar({ length: 255 }).notNull(),
  updatedAt: timestamp().notNull().defaultNow(),
  email: varchar({ length: 255 }).notNull().unique(),
});

