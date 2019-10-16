import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import axios from 'axios';


/**
 * Original implementation.
 * Result:
 * - Works fine locally 'serverless invoke local -f hello`
 * - Does not work from http GET call `curl -X GET https://ux4w80vg85.execute-api.us-east-1.amazonaws.com/dev/hello`
 */
// export const hello: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
//   // Extenral Http call with Axios
//   // let URL:string = "https://api.weather.gov/points/39.7456,-97.0892";
//   let URL:string = "https://demo8946897.mockable.io";
//   let mockResponse = await axios.get(URL,{});

//   // Send response
//   const response = {
//     statusCode: 200,
//     body: {
//       message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
//       mockResponse: mockResponse.data
//     },
//   };
//   cb(null, response);
// }


/**
 * First Fix Attempt: Answer 1, Gareth McCumskey 
 * Reference: https://stackoverflow.com/questions/58406594/serverless-framework-lambda-errors-on-external-http-calls/58406957#58406957
 * Result: 
 * - After this change I have the same error. 
 * - Also the return output is not working with this non-callback change on 'serverless invoke local -f hello`
 */
export const hello: Handler = async (event: APIGatewayEvent, context: Context) => {

  // External Http call with Axios
  let URL:string = "https://demo8946897.mockable.io";
  let mockResponse = await axios.get(URL,{});

  // Send response
  return {
    statusCode: 200,
    body: {
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      mockResponse: mockResponse.data
    },
  };
}

