import React, { useMemo } from 'react';
import { BondingCurveProvider, OnomyHubProvider, RequireOnomyHub } from '@onomy/react-hub';
import { WebWalletBackend } from '@onomy/wallet-backend-web';

import {
  KEPLR_CONFIG,
  REACT_APP_BONDING_NOM_CONTRACT_ADDRESS,
  REACT_APP_ETH_WS_URL,
  REACT_APP_GRAVITY_CONTRACT_ADDRESS,
  REACT_APP_WNOM_CONTRACT_ADDRESS,
  BLOCKS_TO_WAIT_FOR_BRIDGE,
  REACT_APP_WETH_USD_UNISWAP_POOL,
  REACT_APP_ONEX_NET,
} from './env';
import { OnexConstants } from '@onomy/client';

console.log(OnexConstants.CHAIN_INFO.TESTNET);
export function WebWalletProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const backend = useMemo(() => new WebWalletBackend(), []);
  return (
    <OnomyHubProvider
      backend={backend}
      onomyChainInfo={KEPLR_CONFIG}
      onexChainInfo={(
        REACT_APP_ONEX_NET ? OnexConstants.CHAIN_INFO[REACT_APP_ONEX_NET as "DEVNET" | "TESTNET" || "MAINNET"] : undefined
      ) ?? undefined}
      ethWsUrl={REACT_APP_ETH_WS_URL}
      nomContractAddress={REACT_APP_WNOM_CONTRACT_ADDRESS}
      bondContractAddress={REACT_APP_BONDING_NOM_CONTRACT_ADDRESS}
      gravityContractAddress={REACT_APP_GRAVITY_CONTRACT_ADDRESS}
      wEthUsdtUniswapPoolAddress={REACT_APP_WETH_USD_UNISWAP_POOL}
    >
      <BondingCurveProvider ethBridgeWaitBlocks={BLOCKS_TO_WAIT_FOR_BRIDGE}>
        <RequireOnomyHub>{children}</RequireOnomyHub>
      </BondingCurveProvider>
    </OnomyHubProvider>
  );
}
