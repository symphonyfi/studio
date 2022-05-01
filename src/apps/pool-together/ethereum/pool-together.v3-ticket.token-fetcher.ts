import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { UNISWAP_V2_DEFINITION } from '~apps/uniswap-v2/uniswap-v2.definition';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { PoolTogetherV3PrizePoolTokenHelper } from '../helpers/pool-together-v3.prize-pool.token-helper';
import { PoolTogetherApiPrizePoolRegistry } from '../helpers/pool-together.api.prize-pool-registry';
import { POOL_TOGETHER_DEFINITION } from '../pool-together.definition';

const appId = POOL_TOGETHER_DEFINITION.id;
const groupId = POOL_TOGETHER_DEFINITION.groups.v3.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumPoolTogetherV3TicketTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(PoolTogetherV3PrizePoolTokenHelper)
    private readonly poolTogetherV3PrizePoolTokenHelper: PoolTogetherV3PrizePoolTokenHelper,
    @Inject(PoolTogetherApiPrizePoolRegistry) private readonly prizePoolRegistry: PoolTogetherApiPrizePoolRegistry,
  ) {}

  async getPositions() {
    const prizePools = await this.prizePoolRegistry.getV3PrizePools(network);

    return this.poolTogetherV3PrizePoolTokenHelper.getTokens({
      network,
      prizePools,
      dependencies: [
        {
          appId: UNISWAP_V2_DEFINITION.id,
          groupIds: [UNISWAP_V2_DEFINITION.groups.pool.id],
          network,
        },
        {
          appId: POOL_TOGETHER_DEFINITION.id,
          groupIds: [POOL_TOGETHER_DEFINITION.groups.v3.id], // For pPOOL drip
          network,
        },
      ],
    });
  }
}
