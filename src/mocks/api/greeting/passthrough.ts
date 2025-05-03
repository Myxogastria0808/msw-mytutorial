import { http, passthrough } from "msw";

//処理が貫通するパターン;
const passthroughHandler = http.get(
  "http://localhost:3000/api/greeting/passthrough",
  () => {
    console.log(
      "server log: GET http://localhost:3000/api/greeting/passthrough"
    );
    return passthrough();
  }
);

export default passthroughHandler;
