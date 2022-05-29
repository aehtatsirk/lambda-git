# lambda-git-action
## How to automatically deploy codes in AWS lambda using git action

Whenever we push our codes to our branch, `master`, using git action, this will automatically update our codes into our lambda function.

Under our [main.yaml](https://github.com/aehtatsirk/lambda-git-action/blob/master/.github/workflows/main.yml), we deploy lambda through the following codes:

 -  [npx ncc build index.ts](https://github.com/vercel/ncc)
	 - Compile our `index.ts` module into a single file, together with all its imported dependencies
 - `zip -j deploy.zip ./dist/*`
	 - Create a zip file named, `deploy.zip` with the compiled module built by `ncc` under `./dist/*`
 - [aws lambda update-function-code](https://docs.aws.amazon.com/cli/latest/reference/lambda/update-function-code.html)
	 - Update our function's codes directly to AWS lambda
	 - `aws lambda update-function-code --function-name=lambda-git-action --zip-file=fileb://deploy.zip`