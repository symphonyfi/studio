import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { PoolTogetherV3PrizePoolTokenHelper } from '../helpers/pool-together-v3.prize-pool.token-helper';
import { PoolTogetherApiPrizePoolRegistry } from '../helpers/pool-together.api.prize-pool-registry';
import { POOL_TOGETHER_DEFINITION } from '../pool-together.definition';

const network = Network.CELO_MAINNET;

@Register.TokenPositionFetcher({
  appId: POOL_TOGETHER_DEFINITION.id,
  groupId: POOL_TOGETHER_DEFINITION.groups.v3.id,
  network,
})
export class CeloPoolTogetherV3TicketTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(PoolTogetherV3PrizePoolTokenHelper)
    private readonly poolTogetherV3PrizePoolTokenHelper: PoolTogetherV3PrizePoolTokenHelper,
    @Inject(PoolTogetherApiPrizePoolRegistry) private readonly prizePoolRegistry: PoolTogetherApiPrizePoolRegistry,
  ) {}

  async getPositions() {
    const prizePools = await this.prizePoolRegistry.getV3PrizePools(network);

    return this.poolTogetherV3PrizePoolTokenHelper.getTokens({
      network: Network.CELO_MAINNET,
      prizePools,
      dependencies: [],
    });
  }
}
