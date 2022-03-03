# Uneccessary Distributed calc

### Required installs:

[Node.js](https://nodejs.org/en/)
[Azure Functions Core Tools](https://github.com/Azure/azure-functions-core-tools)

### Recommended

[VSCode](https://code.visualstudio.com/)
[Azure Tools (VSCode extension)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)

## Tasks:

### Task 1

Create a function to accept an HTTP request with parameters

```dotnetcli
operation
input1
input2
```

Store this information along with an unique `id` in CosmosDB, in a container with your name i.e `[your-name]`
There exsist a Cosmos already, instructor will show you how to retrieve ConnectionString.

### Task 2

Create a dunction that triggers when a new document have been added to your CosmosDB container `[your-name]`

Use `operation`, `input1` and `input2` to create an result

Store the result in same container with `operation: "result"`

### Task 3

Create a function that returns result for given `id` in url-query

### Task 4

Provision and deploy your function to the cloud using Azure Extenstion
