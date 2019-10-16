import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import axios from 'axios';

export const hello: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {


  // Try with Axios
  const headers = {};
  var httpClient = axios.create({
    baseURL: "https://demo8946897.mockable.io",
    timeout: 1000,
    headers: headers
  });
  let mockResponse = await httpClient.get("/", { params: {} });
  console.log("mock responnse:", mockResponse);

  // Send response
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      mockResponse: mockResponse
    }),
  };
  return response;
}
