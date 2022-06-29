# carbon-rpc-nodes

This repository of node lists allows frontends to fetch metadata associated with Carbon nodes.
The node JSON schema can be found [here](/node.schema.json).

An example node JSON follows the structure below:

```
{
    "network": "This is a string"
    "nodes": [
        {
            "description": "This is a string",
            "nodeId": "This is a string",
            "rpcUrl": "This is a string",
            "wsUrl": "This is a string",
            "faucetUrl": "This is a string",
            "insightsUrl": "This is a string",
            "restUrl": "This is a string",
            "moniker": "This is a string",
            "appBuild": "This is a string",
            "lastupdated": "This is a string",
            "rpcUptime": "This is a string",
            "wsUptime": "This is a string",
            "insightUptime": "This is a string",
            "tmWsUrl": "This is a string",
            "creator": {
                "description": "This is a string",
                "name": "This is a string",
                "telegram": "This is a string",
                "email": "This is an optional email"
            }
        }
    ]
}
```

## How to add node details
1. Open the folder `publicNodes`.
2. Depending on the network, choose `publicNodes-<network>.json`. For example, pick `publicNodes-mainnet.json` if you wish to add a node in ***mainnet***.
3. Add the node details by adding another element in the nodes array according to the structure above. For example:

```
"nodes": [
    {
        "description": "This is a string",
        "nodeId": "This is a string",
        "rpcUrl": "This is a string",
        "wsUrl": "This is a string",
        "faucetUrl": "This is a string",
        "insightsUrl": "This is a string",
        "restUrl": "This is a string",
        "moniker": "This is a string",
        "appBuild": "This is a string",
        "lastupdated": "This is a string",
        "rpcUptime": "This is a string",
        "wsUptime": "This is a string",
        "insightUptime": "This is a string",
        "tmWsUrl": "This is a string",
        "creator": {
            "description": "This is a string",
            "name": "This is a string",
            "telegram": "This is a string",
            "email": "This is an optional email"
        }
    }, // ADD THE NEW NODE HERE
    {
        "description": "This is another string",
        "nodeId": "This is another string",
        "rpcUrl": "This is another string",
        "wsUrl": "This is another string",
        "faucetUrl": "This is another string",
        "insightsUrl": "This is another string",
        "restUrl": "This is another string",
        "moniker": "This is another string",
        "appBuild": "This is another string",
        "lastupdated": "This is another string",
        "rpcUptime": "This is another string",
        "wsUptime": "This is another string",
        "insightUptime": "This is another string",
        "tmWsUrl": "This is another string",
        "creator": {
            "description": "This is another string",
            "name": "This is another string",
            "telegram": "This is another string",
            "email": "This is another optional email"
        }
    }
]
```

Remember to add a comma (`,`) after the previous element in the array.

4. Create a Pull Request to merge your branch into `master`, and wait for a review.