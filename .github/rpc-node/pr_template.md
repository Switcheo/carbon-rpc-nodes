# New RPC Node Template

Please update the below configurations carefully. Each RPC json file under the [configs](../../configs) folder correspond to their respective networks. For example, [configs/mainnet.json](../../configs/mainnet.json) is for adding RPC nodes that connect to `mainnet`. As such, please check the network of your Carbon RPC Node and add to the correct `configs/<network>.json` file.

Please make sure to add to the **bottom** of the array.

## RPC Node Data Structure
|Field   |Type   |Required  |Description  |Notes   |
|---|---|---|---|---|
|`description`   |`string`   |false   |A short description of the node   |-  |
|`nodeId`   |`string`   |true   |The unique nodeId of the node.   |Should only consist of the characters **A-Z, a-z, 0-9 and _**<br />Please make sure your `nodeId` input **does not match** other `nodeId` values in the JSON file   |
|`rpcUrl`   |`string`   |true   |The Tendermint RPC endpoint pointing to port 26657    |[Info](https://docs.carbon.network/api-references/tendermint-rpc)   |
|`wsUrl`   |`string`   |true   |The Carbon Websocket endpoint pointing to port 5000   |[Info](https://docs.carbon.network/api-references/carbon-websocket)   |
|`restUrl`   |`string`   |true   |The Carbon Rest API endpoint pointing to port 1317   |[Info](https://docs.carbon.network/api-references/carbon-rpc)   |
|`grpcWebUrl`   |`string`   |true   |The Carbon GRPC-Web endpoint pointing to port 9091   |[Info](https://docs.carbon.network/api-docs/carbon-api)   |
|`faucetUrl`   |`string`   |true   |The endpoint URL for Carbon Faucet   |Only available on `testnet`/`devnet`<br />If not available, insert an empty string (i.e. `""`)   |
|`insightsUrl`   |`string`   |true   |The endpoint URL for Carbon Insights   |If not available, insert an empty string (i.e. `""`)<br />[Info](https://docs.carbon.network/api-references/carbon-insights)   |
|`moniker`   |`string`   |true   |The display name of the node   |Should only consist of the characters **A-Z, a-z, 0-9 and _**<br />Please make sure your `moniker` input **does not match** other `moniker` values in the JSON file    |
|`appBuild`  |`string`   |true   |The network of the node   |Accepted Values: `mainnet \| testnet \| devnet`   |
|`lastupdated`   |`string`   |true   |The last-updated timestamp   |Should be in the format `yyyy-MM-ddTHH:mm:ss.SSSZ`   |
|`tmWsUrl`   |`string`   |true   |The Tendermint Websocket endpoint pointing to port 26657   |Should follow the pattern `wss://<rpcUrl domain>/`   |
|`creator`   |`obj`   |true   |The details of the creator   |Please refer to the [Creator data structure](#node-creator-data-structure) for the details to include in `creator` object  |

<hr />

## Node Creator Data Structure
|Field   |Type   |Required   |Description   |Notes   |
|---|---|---|---|---|
|`description`   |`string`   |false   |A short description of the node creator   |-   |
|`name`   |`string`   |true   |The name of the creator   |-   |
|`telegram`   |`string`   |true   |The telegram account link of the creator (follows the pattern https://t.me/<username>)   |Should not include `@` symbol   |
|`email`   |`string`   |false   |The email address of the creator   |For contacting node creator if there are issues with said node   |
