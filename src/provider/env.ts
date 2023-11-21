import { OnomyConstants } from '@onomy/client';
import { OnomyHubConstants } from '@onomy/hub';

export const {
  REACT_APP_GRAPHQL_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/onomyprotocol/ograph-testnet',
  REACT_APP_ONEX_GRAPHQL_ENDPOINT = 'https://graphql-onex-testnet.onomy.io/subgraphs/name/onomyprotocol/mgraph',
  REACT_APP_CHAIN_ID = 'onomy-testnet-1',
  REACT_APP_CHAIN_NAME = 'Onomy Testnet',
  REACT_APP_ONOMY_RPC_URL = 'https://rpc-testnet.onomy.io/',
  REACT_APP_ONOMY_REST_URL = 'https://rest-testnet.onomy.io/',
  REACT_APP_ONOMY_WS_URL = 'wss://rpc-testnet.onomy.io',
  REACT_APP_ETH_WS_URL = '',
  REACT_APP_ETH_NETWORK_NAME = 'goerli',
  REACT_APP_BONDING_NOM_CONTRACT_ADDRESS = '0xD179c5BEd30cADE4E62d53DD89240745Fb4C0CC2',
  REACT_APP_WNOM_CONTRACT_ADDRESS = '0x8EFe26D6839108E831D3a37cA503eA4F136A8E73',
  REACT_APP_GRAVITY_CONTRACT_ADDRESS = '0xBA7cDCD837757EB67Ea889d168Aba1a1Fa7C1340',
  REACT_APP_ETH_NOM_CONTRACT_ADDRESS = '0x9653a2013e23ae976d34543572e3e72f8578e4c6',
  REACT_APP_WETH_USD_UNISWAP_POOL = '',
  REACT_APP_ONEX_NET = 'DEVNET',
} = process.env;

export const BLOCKS_TO_WAIT_FOR_BRIDGE = parseInt(
  process.env.REACT_APP_BLOCKS_TO_WAIT_FOR_BRIDGE || '64',
  10
);

OnomyHubConstants.updateAssetData({
  bNomAsset: {
    id: REACT_APP_WNOM_CONTRACT_ADDRESS,
  },
  ethNomAsset: {
    id: REACT_APP_ETH_NOM_CONTRACT_ADDRESS,
  },
  ethChainId: REACT_APP_ETH_NETWORK_NAME,
});

export const KEPLR_CONFIG = {
  ...OnomyConstants.CHAIN_INFO.MAINNET,
  chainId: REACT_APP_CHAIN_ID,
  chainName: REACT_APP_CHAIN_NAME,
  rpc: REACT_APP_ONOMY_RPC_URL,
  rest: REACT_APP_ONOMY_REST_URL,
};
