import {
  allPostsFetcher,
  noneFetcher,
  pathParamsFetcher,
  postFetcher,
  queryParamsFetcher,
  responseFetcher,
} from "./lib/index";
import { server } from "./mocks/node";

// Call the `.listen` method to enable API mocking.
server.listen();

const main = async () => {
  // 何も返さないパターン
  const none = await noneFetcher();
  console.log("");

  // Responseを返すパターン
  const response = await responseFetcher();
  console.log("response: " + response + "\n");

  // Path Params pattern
  const pathParams = await pathParamsFetcher();
  console.log("pathParams: " + pathParams + "\n");

  // Query Params pattern
  const queryParams = await queryParamsFetcher();
  console.log("queryParams: " + queryParams + "\n");

  // POST: AllPostsに新規投稿を追加するパターン
  const post = await postFetcher();
  console.log("post: " + post + "\n");

  // GET: AllPostsを返すパターン
  const allPosts = await allPostsFetcher();
  console.log("allPosts: " + allPosts + "\n");
};

main();
