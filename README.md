# Carbon Public RPC / API Nodes

This repository contains a list of public RPC / API nodes ran by the community.

This allows dApps on Carbon to fetch endpoint information and other metadata associated with the nodes.

## Prerequisites

Take note of the following requirements to enable an easy flow and navigation through various nodes on the blockchain.

### Node Hardware Requirements

- Please ensure your node **exceeds** the recommended hardware specifications [here](https://guide.carbon.network/introduction/getting-started/carbon-node-setup/mainnet#node-requirements) as the node will be heavily accessed.

### General Requirements

- Your node **must** run with the `persistence` service (pSQL) enabled
- All endpoint / ports given in the specified configuration must be publicly accessible (except for `insightsUrl`)
- Nodes metrics such (e.g. uptime of `rpcUrl` / `wsUrl`) will be regularly sampled. Node providers must ensure a good node rating to be considered.

### Other Considerations

- You may experience Denial of Service from time to time if high traffic is experienced on the network.
- Do not list your personal info (e.g. Telegram and Email) to avoid potential spam. We recommend using separate accounts for the same.

## Adding Your Node Details

The node JSON schema can be found [here](/node.schema.json).

An example node JSON follows the structure below:

```json
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
            "grpcWebUrl": "https://test-grpc-web.carbon.network",
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

1. Navigate to the `configs` fodler
2. Depending on the network, choose `<network>.json`. For example, pick `testnet.json` if you wish to add a node in ***testnet***.
3. Add the node details in JSON format to the **bottom** of the nodes array. Please refer to the [RPC Node data structure](./.github/rpc-node/pr_template.md) for full details on what to include in the JSON. For example:
              
        "nodes": [
            {
                "description": "This is an example of accurate node details",
                "nodeId": "testnet1",
                "rpcUrl": "https://test-tm-api.carbon.network",
                "wsUrl": "wss://test-ws-api.carbon.network/ws",
                ...
                }
            },
            {
                "description": "ADD YOUR NEW NODE HERE",
                "nodeId": "testnet2",
                "rpcUrl": "https://new.node",
                "wsUrl": "wss://new.node/ws",
                "faucetUrl": "https://new.node",
                ...
                "creator": {
                    "description": "Your contact details",
                    "name": "Your name",
                    "telegram": "https://t.me/yourTGusername",
                    "email": "testnet@example.com"
                }
            }
        ]
        

5. [Validate your submission](validate-your-submission)
6. Create a pull request to `master`, and wait for a review

### Validate Your Submission

Please validate your modified JSON configuration files before opening a pull request via the following steps.

In the root of your `carbon-rpc-nodes` local repository, run the following commands:

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
