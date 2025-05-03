import { describe, expect, test } from "vitest";
import {
  pathParamsFetcher,
  postFetcher,
  queryParamsFetcher,
  responseFetcher,
} from "./lib";

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
  test("POST: AllPostsに新規投稿を追加するパターン", async () => {
    const post: { title: string; content: string } | void = await postFetcher();
    expect(post).toEqual({ title: "テスト", content: "テスト投稿です。" });
  });
});
