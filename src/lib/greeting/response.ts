// Responseを返すパターン
const responseFetcher = async (): Promise<string | void> => {
  const response: string | void = await fetch(
    "http://localhost:3000/api/greeting/reponse"
  )
    .then((res) => {
      console.log("response: ", res);
      return res.text();
    })
    .catch((err) => {
      console.error("response: ", err);
    });
  return response;
};

export default responseFetcher;
