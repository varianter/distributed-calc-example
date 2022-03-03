import { AzureFunction, Context } from '@azure/functions';

const cosmosDBTrigger: AzureFunction = async function (
  context: Context,
  documents: any[]
): Promise<void> {
  if (!!documents && documents.length > 0) {
    const results = [];
    for (const document of documents) {
      const { operation, input1, input2, id } = document as any;
      if (operation === 'result') continue;

      try {
        switch (operation) {
          case 'add':
            results.push({
              id,
              result: parseInt(input1, 10) + parseInt(input2, 10),
              operation: 'result',
            });
            break;
          case 'subract':
            results.push({
              id,
              result: parseInt(input1, 10) - parseInt(input2, 10),
              operation: 'result',
            });
            break;
          case 'multiply':
            results.push({
              id,
              result: parseInt(input1, 10) + parseInt(input2, 10),
              operation: 'result',
            });
            break;
        }
      } catch (e) {
        results.push({
          id,
          result: e,
          operation: 'result',
        });
      }
    }
    context.bindings.outputDocument = JSON.stringify(results);
  }
};

export default cosmosDBTrigger;
