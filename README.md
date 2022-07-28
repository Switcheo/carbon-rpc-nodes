# carbon-rpc-nodes

This repository of node lists allows frontends to fetch metadata associated with Carbon nodes.
The node JSON schema can be found [here](/node.schema.json).

An example node JSON follows the structure below:

```
{
    "network": "testnet"
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
            "tmWsUrl": "wss://test-tm-api.carbon.network",
            "creator": {
                "description": "These are contact details of the creator",
                "name": "This is a name",
                "telegram": "https://t.me/thisis_a_username",
                "email": "example@example.com"
            }
        }
    ]
}
```

## Prerequisites
Take note of the following requirements to enable an easy flow and navigation through various nodes on the blockchain.

### General Requirements
- A higher processing system may be required to run the node as users may experience increased traffic.
- Nodes metrics such (e.g. uptime of rpcUrl/wsUrl) will be collected. Users must regularly check and update their endpoints (e.g. update URLs consistently to avoid expiry) in order to attain a good node rating.
- You may experience Denial of Service from time to time if high traffic is experienced on the network.
- Do not list your personal info (e.g. Telegram and Email) to avoid potential spam. We recommend using separate accounts for the same.

### Technical Requirements
Click [here](https://github.com/Switcheo/carbon-bootstrap/blob/master/STARGATE.md#node-requirements) to know more about the technical requirements.

## How to Add Node Details
1. Open the folder `configs`.
2. Depending on the network, choose `<network>.json`. For example, pick `testnet.json` if you wish to add a node in ***testnet***.
3. Add the node details in JSON format to the **bottom** of the nodes array. Please refer to the [RPC Node data structure](./.github/rpc-node/pr_template.md) for full details on what to include in the JSON.

For example:
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
        "tmWsUrl": "wss://test-tm-api.carbon.network",
        "creator": {
            "description": "These are contact details of the creator",
            "name": "This is a name",
            "telegram": "https://t.me/thisis_a_username",
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
        "tmWsUrl": "wss://test-tm-api.carbon.network",
        "creator": {
            "description": "These are contact details of the creator",
            "name": "Another name",
            "telegram": "https://t.me/thisisausernametoo",
            "email": "testnet@example.com"
        }
    }
]
```

Remember to add a comma (`,`) after the previous element in the array.

4. Create a Pull Request to merge your branch into `master`, and wait for a review.

## How to Validate the JSON Files on Command Line
In the root of your `carbon-rpc-nodes` local repository, run the following in your command line:
```bash
# install dependencies
yarn

# run validate command
yarn validate
```
You should see the following output if all the `<network>.json` files have passed the validation test:
```
> pajv validate -s node.schema.json -d "configs/*.json" --verbose
configs/devnet.json valid
configs/mainnet.json valid
configs/testnet.json valid
```
