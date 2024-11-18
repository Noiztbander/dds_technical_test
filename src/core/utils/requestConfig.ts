import { REQUEST_TYPE } from "../types/RequestResponse";

export const requestConfig = (
  method: REQUEST_TYPE = "GET",
  body?: object
): RequestInit => ({
  method,
  cache: "no-store",
  headers: {
    Accept: "application/json",
  },
  body: method === "POST" || "PUT" ? JSON.stringify(body) : undefined,
});
