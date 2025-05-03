// Path Params pattern
const pathParamsFetcher = async (): Promise<string | void> => {
  const pathParams: string | void = await fetch(
    "http://localhost:3000/api/greeting/path/John"
  )
    .then((res) => {
      console.log("pathParams: ", res);
      return res.text();
    })
    .catch((err) => {
      console.error("pathParams: ", err);
    });
  return pathParams;
};

export default pathParamsFetcher;
