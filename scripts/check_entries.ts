const fs = require("fs");

const cwd = process.cwd();

enum Network {
  Mainnet = "mainnet",
  Testnet = "testnet",
  Devnet = "devnet",
}

interface NodeCreator {
  name: string;
  telegram: string;
  email?: string;
  description?: string;
}

interface NodeItem {
  description?: string;
  nodeId: string;
  rpcUrl: string;
  wsUrl: string;
  faucetUrl: string;
  insightsUrl: string;
  restUrl: string;
  moniker: string;
  appBuild: Network;
  lastupdated: string;
  tmWsUrl: string;
  creator: NodeCreator;
}

interface NodeJSON {
  network: Network;
  nodes: NodeItem[];
}

interface DuplicateResponse {
  status: boolean;
  entry?: string;
  id?: number;
}

type OutcomeMap = { [key in Network]: boolean } // true = success, false = failure

function checkDuplicates(data: NodeJSON, key: "moniker" | "nodeId"): DuplicateResponse {
  if (data.nodes.length === 0) {
    return { status: false };
  }
  
  const idMap: string[] = [];
  const idArray = data.nodes.map((node: NodeItem) => node[key] as string);

  let duplicateEntry: string | null = null;
  let duplicateId: number | null = null;
  for (let ii = 0; ii < idArray.length; ii++) {
    if (idMap.includes(idArray[ii])) {
      duplicateEntry = idArray[ii];
      duplicateId = ii + 1;
      break;
    } else {
      idMap.push(idArray[ii]);
    }
  }

  return (duplicateEntry && duplicateId) ? {
    status: true,
    entry: duplicateEntry,
    id: duplicateId,
  } : {
    status: false
  };
}

function checkNodeNetwork(data: NodeJSON, network: Network) {
  if (data.nodes.length === 0) {
    return { status: false };
  }

  let invalidEntry: Network | null = null;
  let invalidId: number | null = null;
  for (let ii = 0; ii < data.nodes.length; ii++) {
    if (data.nodes[ii].appBuild !== network) {
      invalidEntry = data.nodes[ii].appBuild;
      invalidId = ii + 1;
      break;
    }
  }

  return (invalidEntry && invalidId) ? {
    status: true,
    entry: invalidEntry,
    id: invalidId,
  } : {
    status: false
  };
}

function returnSuffix(newNumber: number) {
  switch (newNumber) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

const outcomeMap: OutcomeMap = {
  mainnet: true,
  testnet: true,
  devnet: true,
};
const assessNetworks: Network[] = Object.values(Network);

console.log("");
for (let jj = 0; jj < assessNetworks.length; jj++) {
  const dataString = fs.readFileSync(`${cwd}/configs/${assessNetworks[jj]}.json`, "utf-8");

  let jsonData: NodeJSON | null = null;
  try {
    jsonData = JSON.parse(dataString) as NodeJSON;
  } catch (err) {
    console.log(`${assessNetworks[jj]}.json is not a valid JSON file.`);
    outcomeMap[assessNetworks[jj]] = false;
  }

  if (!jsonData) continue;
  // Check duplicate nodeId
  const hasDuplicateNodeId = checkDuplicates(jsonData, "nodeId");
  if (hasDuplicateNodeId.entry && hasDuplicateNodeId.id) {
    console.log(`${assessNetworks[jj]}.json has a duplicate nodeId \"${hasDuplicateNodeId.entry}\" on the ${hasDuplicateNodeId.id}${returnSuffix(hasDuplicateNodeId.id)} node. Please make sure all nodeId values are unique`);
    outcomeMap[assessNetworks[jj]] = false;
    continue;
  }

  // Check duplicate moniker
  const hasDuplicateMoniker = checkDuplicates(jsonData, "moniker");
  if (hasDuplicateMoniker.entry && hasDuplicateMoniker.id) {
    console.log(`${assessNetworks[jj]}.json has a duplicate moniker \"${hasDuplicateMoniker.entry}\" on the ${hasDuplicateMoniker.id}${returnSuffix(hasDuplicateMoniker.id)} node. Please make sure all moniker values are unique`)
    outcomeMap[assessNetworks[jj]] = false;
    continue;
  }

  // Check network appBuild matches list network
  const checkAppBuilds = checkNodeNetwork(jsonData, assessNetworks[jj]);
  if (checkAppBuilds.entry && checkAppBuilds.id) {
    console.log(`${assessNetworks[jj]}.json has an invalid appBuild \"${checkAppBuilds.entry}\" on the ${checkAppBuilds.id}${returnSuffix(checkAppBuilds.id)} node. Please make sure all network values are \"${assessNetworks[jj]}\"`)
    outcomeMap[assessNetworks[jj]] = false;
    continue;
  }

  console.log(`${assessNetworks[jj]}.json done!`);
}

const outcomeArr = Object.values(outcomeMap);
if (outcomeArr.includes(false)) {
  console.error("Error! Please check the output above to correct the errors.");
  console.log("");
  process.exit(1);
} else {
  console.log('Success!');
}
console.log("");
process.exit(0);
