// 何も返さないパターン
export const noneFetcher = async (): Promise<void> => {
  const none: void = await fetch("http://localhost:3000/api/greeting/none")
    .then((res) => {
      console.log("none: ", res);
    })
    .catch((err) => {
      console.error("none: ", err);
    });
  return none;
};

// Responseを返すパターン
export const responseFetcher = async (): Promise<string | void> => {
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

// Path Params pattern
export const pathParamsFetcher = async (): Promise<string | void> => {
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

// Query Params pattern
export const queryParamsFetcher = async (): Promise<string | void> => {
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
