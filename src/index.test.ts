import { describe, expect, test } from "vitest";
import {
  pathParamsFetcher,
  queryParamsFetcher,
  responseFetcher,
} from "./lib/fetcher";

describe("Mock Service Workers", () => {
  test("Responseを返すパターン", async () => {
    const response: string | void = await responseFetcher();
    expect(response).toEqual("Hello, World!");
  });
  test("Path Params pattern", async () => {
    const pathParams: string | void = await pathParamsFetcher();
    expect(pathParams).toEqual("Hello, John");
  });
  test("Query Params pattern", async () => {
    const queryParams: string | void = await queryParamsFetcher();
    expect(queryParams).toBe("Hello, Bob");
  });
});
