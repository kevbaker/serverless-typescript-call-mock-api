import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import axios from 'axios';

export const hello: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {

  // Extenral Http call with Axios
  // let URL:string = "https://api.weather.gov/points/39.7456,-97.0892";
  let URL:string = "https://demo8946897.mockable.io";
  let mockResponse = await axios.get(URL,{});

  // Send response
  const response = {
    statusCode: 200,
    body: {
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      mockResponse: mockResponse.data
    },
  };
  cb(null, response);
}
