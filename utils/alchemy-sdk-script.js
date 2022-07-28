// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from 'alchemy-sdk';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: '1jtc6iuEspYykHdJBT9kgWw02xlcDAti', // Replace with your Alchemy API Key.
  network: Network.ETH_RINKEBY, // Replace with your network.
  maxRetries: 10,
};

const alchemy = new Alchemy(settings);

async function main() {
  const response = await alchemy.nft.getNftMetadata(
    '0x93588Fe038c55071dB057E9ae176f45CA45BaF12',
    '5'
  );

  // Uncomment this line to see the full api response:
  // console.log(response);

  // Print some commonly used fields:
  console.log('NFT name: ', response.title);
  console.log('token type: ', response.tokenType);
  console.log('tokenUri: ', response.tokenUri.gateway);
  console.log('image url: ', response.rawMetadata.image);
  console.log('time last updated: ', response.timeLastUpdated);
  console.log('===');
}

main();
