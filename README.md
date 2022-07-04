# carbon-rpc-nodes

This repository of node lists allows frontends to fetch metadata associated with Carbon nodes.
The node JSON schema can be found [here](/node.schema.json).

An example node JSON follows the structure below:

```
{
    "network": "This is a string"
    "nodes": [
        {
            "description": "This is an example of accurate node details",
            "nodeId": "test1",
            "rpcUrl": "https://test-tm-api.carbon.network",
            "wsUrl": "wss://test-ws-api.carbon.network/ws",
            "faucetUrl": "https://test-faucet.carbon.network",
            "insightsUrl": "https://test-api-insights.carbon.network",
            "restUrl": "https://test-api.carbon.network",
            "moniker": "testnet default 1",
            "appBuild": "testnet",
            "lastupdated": "2022-07-01T03:42:00.123Z",
            "rpcUptime": "100",
            "wsUptime": "100",
            "insightUptime": "100",
            "tmWsUrl": "wss://test-tm-api.carbon.network",
            "creator": {
                "description": "These are contact details of the creator",
                "name": "This is a name",
                "telegram": "thisis_a_username",
                "email": "example@example.com"
            }
        }
    ]
}
```

## How to add node details
1. Open the folder `configs`.
2. Depending on the network, choose `<network>.json`. For example, pick `testnet.json` if you wish to add a node in ***testnet***.
3. Add the node details by adding another element in the nodes array according to the structure above. For example:

```
"nodes": [
    {
        "description": "This is an example of accurate node details",
        "nodeId": "testnet1",
        "rpcUrl": "https://test-tm-api.carbon.network",
        "wsUrl": "wss://test-ws-api.carbon.network/ws",
        "faucetUrl": "https://test-faucet.carbon.network",
        "insightsUrl": "https://test-api-insights.carbon.network",
        "restUrl": "https://test-api.carbon.network",
        "moniker": "testnet default 1",
        "appBuild": "testnet",
        "lastupdated": "2022-07-01T03:42:00.123Z",
        "rpcUptime": "100",
        "wsUptime": "100",
        "insightUptime": "100",
        "tmWsUrl": "wss://test-tm-api.carbon.network",
        "creator": {
            "description": "These are contact details of the creator",
            "name": "This is a name",
            "telegram": "thisis_a_username",
            "email": "example@example.com"
        }
    }, // ADD THE NEW NODE HERE
    {
        "description": "This is another example of accurate node details",
        "nodeId": "testnet2",
        "rpcUrl": "https://test-tm-api.carbon.network",
        "wsUrl": "wss://test-ws-api.carbon.network/ws",
        "faucetUrl": "https://test-faucet.carbon.network",
        "insightsUrl": "https://test-api-insights.carbon.network",
        "restUrl": "https://test-api.carbon.network",
        "moniker": "testnet default 2",
        "appBuild": "testnet",
        "lastupdated": "2022-07-04T03:42:00.123Z",
        "rpcUptime": "100",
        "wsUptime": "100",
        "insightUptime": "100",
        "tmWsUrl": "wss://test-tm-api.carbon.network",
        "creator": {
            "description": "These are contact details of the creator",
            "name": "Another name",
            "telegram": "thisisausernametoo",
            "email": "testnet@example.com"
        }
    }
]
```

Remember to add a comma (`,`) after the previous element in the array.

4. Create a Pull Request to merge your branch into `master`, and wait for a review.