import { http, HttpResponse } from "msw";

const pathParamsHandler = http.get(
  "http://localhost:3000/api/greeting/path/:name",
  ({ params }) => {
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
  }
);

export default pathParamsHandler;
