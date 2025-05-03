// POST: AllPostsに新規投稿を追加するパターン
const postFetcher = async () => {
  const allPosts = await fetch("http://localhost:3000/api/blog/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "テスト", content: "テスト投稿です。" }),
  })
    .then((res) => {
      console.log("post: ", res);
      return res;
    })
    .then((res) => res.json())
    .catch((err) => {
      console.error("post: ", err);
    });
  return allPosts;
};

export default postFetcher;
