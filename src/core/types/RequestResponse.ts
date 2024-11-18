export type REQUEST_TYPE = "GET" | "POST" | "PUT" | "DELETE";

export interface RequestResponse<T> {
  data: T;
}
