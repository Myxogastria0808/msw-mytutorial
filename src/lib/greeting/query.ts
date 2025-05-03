// Query Params pattern
const queryParamsFetcher = async (): Promise<string | void> => {
  const queryParams: string | void = await fetch(
    "http://localhost:3000/api/greeting/query?name=Bob"
  )
    .then((res) => {
      console.log("queryParams: ", res);
      return res.text();
    })
    .catch((err) => {
      console.error("queryParams: ", err);
    });
  return queryParams;
};

export default queryParamsFetcher;
