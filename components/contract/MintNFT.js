import * as React from 'react';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from 'wagmi';

import contracts from '@/contracts/hardhat_contracts.json';
const paperAddress = contracts.Paper.address;
const paperABI = contracts.Paper.abi;
const style = {
  button: `mx-auto text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `,
};

export function MintNFT() {
  const { address } = useAccount();
  console.log('wallet address is ', address);

  const { config } = usePrepareContractWrite({
    addressOrName: paperAddress,
    contractInterface: paperABI,
    functionName: 'safeMint',
    args: [address, 'https://d2xmu33khflglz.cloudfront.net/uri1.json'],
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <button
        className={style.button}
        disabled={!write}
        onClick={() => write?.()}
      >
        {isLoading ? 'Minting...' : 'Mint NFT'}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://rinkeby.etherscan.io/tx/${data?.hash}`}>
              Rinkeby Etherscan
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
