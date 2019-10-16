# Serverless TypeScript Call Mock API Example

## Overview

A Serverless Framework appp written in TypeScript that can call an external mock api. This will show how a Serverless Framework app deployed to AWS Lambda can call an external service.

## Setup

### Configure Serverless Framework AWS Credentials

Before deploying the service, AWS credentials must be configured. To configure AWS credentials for Serverless, start by creating an IAM user for Serverless to use.

* Login to AWS and navigate to IAM
* Create a new user called serverless-admin
* Give serverless-admin Programatic access
* Attach the AdministratorAccess policy

Next, copy the Access key ID and Secret access key to your clipboard for use in your Serverless Framework configuration. Configure the Serverless Framework with your access keys using the serverless config credentials command:

```bash
$ serverless config credentials --provider aws --key AWS_CREDENTIALS_KEY --secret AWS_CREDENTIALS_SECRET --profile serverless-aws-admin
```

Output:

```bash
Serverless: Setting up AWS...
Serverless: Saving your AWS profile in "~/.aws/credentials"...
Serverless: Success! Your AWS access keys were stored under the "serverless-aws-admin" profile.
```


## References

* https://www.jamestharpe.com/serverless-typescript-getting-started/