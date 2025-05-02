import { http, HttpResponse, passthrough } from "msw";

export const handlers = [
  // 何も返さないパターン
  http.get("http://localhost:3000/api/greeting/none", () => {
    console.log("server log: GET http://localhost:3000/api/greeting/none");
  }),
  // 処理が貫通するパターン
  // http.get("http://localhost:3000/api/greeting/passthrough", () => {
  //   console.log(
  //     "server log: GET http://localhost:3000/api/greeting/passthrough"
  //   );
  //   return passthrough();
  // }),
  // Responseを返すパターン
  http.get("http://localhost:3000/api/greeting/reponse", () => {
    console.log("server log: GET http://localhost:3000/api/greeting/reponse");
    return new HttpResponse("Hello, World!", { status: 200 });
  }),
  // Path Params pattern
  http.get("http://localhost:3000/api/greeting/path/:name", ({ params }) => {
    // HttpResponse: https://mswjs.io/docs/api/http-response
    // Path Parameterは、以下の様に取得できる
    const { name } = params;
    console.log(
      "server log: GET http://localhost:3000/api/greeting/path/:name"
    );
    console.log("server log: Path Paramers (name): " + name);
    return HttpResponse.text("Hello, " + params.name, {
      status: 200,
    });
  }),
  // Query Params pattern
  http.get("http://localhost:3000/api/greeting/query", ({ request }) => {
    // Query Parameterは、以下の様に取得できる
    const url: URL = new URL(request.url);
    const name = url.searchParams.get("name");
    console.log("server log: GET http://localhost:3000/api/greeting/query");
    console.log("server log: Query Paramers (name): " + name);
    return HttpResponse.text("Hello, " + name, {
      status: 200,
    });
  }),
];
