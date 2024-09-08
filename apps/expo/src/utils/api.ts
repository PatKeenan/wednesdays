import { hc } from "hono/client";
import type { AppType } from "server/src/app";
import { getBaseUrl } from "./get-base-url";

const url = getBaseUrl() + "/api";
export const client = hc<AppType>(url);
