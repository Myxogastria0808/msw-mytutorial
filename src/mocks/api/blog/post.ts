import { DefaultBodyType, http, HttpHandler, HttpResponse } from "msw";

// POST: AllPostsに新規投稿を追加するパターン
const postHandler = (posts: Map<number, DefaultBodyType>): HttpHandler => {
  return http.post(
    "http://localhost:3000/api/blog/post",
    async ({ request }) => {
      const newPost: DefaultBodyType = await request.json();
      posts.set(posts.size, newPost);
      return HttpResponse.json(newPost, { status: 201 });
    }
  );
};

export default postHandler;
