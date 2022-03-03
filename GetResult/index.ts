import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
  inputDocument: any
): Promise<void> {
  if (!inputDocument) {
    context.res = {
      status: 404,
    };
    return;
  }

  const body = JSON.stringify(inputDocument.result);

  context.res = {
    body,
  };
};

export default httpTrigger;
