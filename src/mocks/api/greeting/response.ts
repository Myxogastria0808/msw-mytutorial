import { http, HttpResponse } from "msw";

// Responseを返すパターン
const responseHandler = http.get(
  "http://localhost:3000/api/greeting/reponse",
  () => {
    console.log("server log: GET http://localhost:3000/api/greeting/reponse");
    return new HttpResponse("Hello, World!", { status: 200 });
  }
);

export default responseHandler;
