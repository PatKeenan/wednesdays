import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

import { membersRoute } from "~/routes/members.route";

const app = new Hono();
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello World");
});

const apiRoutes = app.basePath("/api").route("/members", membersRoute);

export type AppType = typeof apiRoutes;

console.log("Server is running on http://localhost:4001");

serve({
  port: 4001,
  fetch: app.fetch,
});
