import { http } from "msw";

// 何も返さないパターン
const noneHandler = http.get("http://localhost:3000/api/greeting/none", () => {
  console.log("server log: GET http://localhost:3000/api/greeting/none");
});

export default noneHandler;
