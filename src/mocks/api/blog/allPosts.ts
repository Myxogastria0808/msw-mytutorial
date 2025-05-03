import { DefaultBodyType, http, HttpHandler, HttpResponse } from "msw";

// GET: AllPostsを返すパターン
const allPostsHandler = (posts: Map<number, DefaultBodyType>): HttpHandler => {
  return http.get("http://localhost:3000/api/blog/all", async () => {
    return HttpResponse.json(posts, { status: 201 });
  });
};

export default allPostsHandler;
