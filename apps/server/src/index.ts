import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

import { membersRoute } from "~/routes/members";

const app = new Hono();
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello World");
});

app.route("/members", membersRoute);

console.log("Server is running on http://localhost:4001");

serve({
  port: 4001,
  fetch: app.fetch,
});
