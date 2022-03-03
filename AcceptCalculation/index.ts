import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  const { operation, input1, input2 } = req.query;
  if (!operation || !input1 || !input2) {
    context.res = {
      status: 400,
      body: 'The query parameters, operation, input1 and input2 is required',
    };
    return;
  }

  context.bindings.outputDocument = JSON.stringify({
    id: context.invocationId,
    operation,
    input1,
    input2,
  });

  context.res = {
    body: `Calculation is accepted, you can view result at /GetResult?id=${context.invocationId}`,
  };
};

export default httpTrigger;
