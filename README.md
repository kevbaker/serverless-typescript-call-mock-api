# Serverless TypeScript Call Mock API Example

## Overview

A Serverless Framework app written in  _TypeScript_ and deployed to AWS that can call an external mock api.

## The Problem

Currently the service works fine locally, but does not work when deployed to AWS.

There seems to be some problem with the async call resolve on response. If I remove the external http call the simple hello function works.

See "Tests" section below for how to see this behaviour.

## Setup

### Configure Serverless Framework AWS Credentials

Before deploying the service, AWS credentials must be configured. To configure AWS credentials for Serverless, start by creating an IAM user for Serverless to use.

* Login to AWS and navigate to IAM
* Create a new user called serverless-admin
* Give serverless-admin Programatic access
* Attach the AdministratorAccess policy

Next, copy the Access key ID and Secret access key to your clipboard for use in your Serverless Framework configuration. Configure the Serverless Framework with your access keys using the serverless config credentials command:

```bash
serverless config credentials --provider aws --key AWS_CREDENTIALS_KEY --secret AWS_CREDENTIALS_SECRET --profile serverless-aws-admin
```


### Install Service

* `npm install serverless -g`
* `npm install`

### Deploy

* `serverless deploy`
* Take not of the "hello" endpoint. It will be something like `https://TESTAPPURL.execute-api.us-east-1.amazonaws.com/dev/hello`

### Test

Run the following tests to see the problem.

#### Test on AWS

Copy the "hello" endpoint to a browser for a simple GET test. You will likely get the following response:

```json
{
"message": "Internal server error"
}
```


#### Test from Local

Execute a serverless invoke on the functional locally.

`serverless invoke local -f hello`

You will likely get the following response:

```
{
    "statusCode": 200,
    "body": {
        "message": "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        "mockResponse": {
            "message": "Hello World."
        }
    }
}
```

## References

* https://www.jamestharpe.com/serverless-typescript-getting-started/