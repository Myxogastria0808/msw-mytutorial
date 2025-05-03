import {
  noneHandler,
  passthroughHandler,
  pathParamsHandler,
  postHandler,
  queryParamsHandler,
  responseHandler,
} from "./api";

const allPosts = new Map();

export const handlers = [
  // GET: 何も返さないパターン
  noneHandler,
  // GET: 処理が貫通するパターン
  passthroughHandler,
  // GET: Responseを返すパターン
  responseHandler,
  // GET: Path Params pattern
  pathParamsHandler,
  // GET: Query Params pattern
  queryParamsHandler,
  // POST: AllPostsに新規投稿を追加するパターン
  postHandler(allPosts),
];
