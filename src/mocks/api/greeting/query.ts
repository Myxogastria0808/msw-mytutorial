import { http, HttpResponse } from "msw";

const queryParamsHandler = http.get(
  "http://localhost:3000/api/greeting/query",
  ({ request }) => {
    // Query Parameterは、以下の様に取得できる
    const url: URL = new URL(request.url);
    const name = url.searchParams.get("name");
    console.log("server log: GET http://localhost:3000/api/greeting/query");
    console.log("server log: Query Paramers (name): " + name);
    return HttpResponse.text("Hello, " + name, {
      status: 200,
    });
  }
);

export default queryParamsHandler;
