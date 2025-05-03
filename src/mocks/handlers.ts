import {
  noneHandler,
  passthroughHandler,
  pathParamsHandler,
  postHandler,
  queryParamsHandler,
  responseHandler,
} from "./api";

// 共有オブジェクト
// POST/PUTのレスポンスを格納するためのMap
// 参照渡しをすることで目的を達成する
// 参考: https://yukiosada.gitbook.io/javascript/shishino
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
