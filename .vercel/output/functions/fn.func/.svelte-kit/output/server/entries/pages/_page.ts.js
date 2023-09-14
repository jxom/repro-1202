import { createPublicClient, webSocket } from "viem";
import { mainnet } from "viem/chains";
async function load() {
  const client = createPublicClient({
    chain: mainnet,
    transport: webSocket("wss://eth-mainnet.g.alchemy.com/v2/et36uFcs0R_YeRwivkGDwrQrVzLirfVt")
  });
  const blockNumber = await client.getBlockNumber();
  console.log("test", blockNumber);
  return { blockNumber: blockNumber.toString() };
}
export {
  load
};
