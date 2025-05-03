// GET: AllPostsを返すパターン
const allPostsFetcher = async () => {
  const allPosts = await fetch("http://localhost:3000/api/blog/all")
    .then((res) => {
      console.log("allPosts: ", res);
      return res;
    })
    .then((res) => res.json())
    .catch((err) => {
      console.error("allPosts: ", err);
    });
  return allPosts;
};

export default allPostsFetcher;
