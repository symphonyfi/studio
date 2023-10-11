/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { PoolV2, PoolV2Interface, WeightedInterestRateModel } from '../PoolV2';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collateralLiquidator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'delegationRegistry',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'collateralWrappers',
        type: 'address[]',
      },
      {
        components: [
          {
            internalType: 'uint64',
            name: 'tickThreshold',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'tickExponential',
            type: 'uint64',
          },
        ],
        internalType: 'struct WeightedInterestRateModel.Parameters',
        name: 'parameters',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'InactiveLiquidity',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientLiquidity',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientShares',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientTickSpacing',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientUtilization',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidBorrowOptions',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidCaller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidCollateralFilterParameters',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidInterestRateModelParameters',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidLoanReceipt',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidParameters',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidReceiptEncoding',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidRedemptionStatus',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTick',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LoanNotExpired',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RepaymentTooHigh',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'UnsupportedCollateral',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnsupportedLoanDuration',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
    ],
    name: 'AdminFeeRateUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AdminFeesWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanReceiptHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proceeds',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'borrowerProceeds',
        type: 'uint256',
      },
    ],
    name: 'CollateralLiquidated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'Deposited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanReceiptHash',
        type: 'bytes32',
      },
    ],
    name: 'LoanLiquidated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanReceiptHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'loanReceipt',
        type: 'bytes',
      },
    ],
    name: 'LoanOriginated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'loanReceiptHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayment',
        type: 'uint256',
      },
    ],
    name: 'LoanRepaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        indexed: true,
        internalType: 'uint128',
        name: 'redemptionId',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'Redeemed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        indexed: true,
        internalType: 'uint128',
        name: 'redemptionId',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawn',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BORROWER_SURPLUS_SPLIT_BASIS_POINTS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'COLLATERAL_FILTER_NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'COLLATERAL_FILTER_VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'IMPLEMENTATION_NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'IMPLEMENTATION_VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'INTEREST_RATE_MODEL_NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'INTEREST_RATE_MODEL_VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TICK_LIMIT_SPACING_BASIS_POINTS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'adminFeeBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'adminFeeRate',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'principal',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'duration',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'collateralTokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxRepayment',
        type: 'uint256',
      },
      {
        internalType: 'uint128[]',
        name: 'ticks',
        type: 'uint128[]',
      },
      {
        internalType: 'bytes',
        name: 'options',
        type: 'bytes',
      },
    ],
    name: 'borrow',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collateralLiquidator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collateralToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collateralWrappers',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currencyToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'loanReceipt',
        type: 'bytes',
      },
    ],
    name: 'decodeLoanReceipt',
    outputs: [
      {
        components: [
          {
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'principal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'repayment',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'adminFee',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'borrower',
            type: 'address',
          },
          {
            internalType: 'uint64',
            name: 'maturity',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'duration',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'collateralToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'collateralTokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint16',
            name: 'collateralWrapperContextLen',
            type: 'uint16',
          },
          {
            internalType: 'bytes',
            name: 'collateralWrapperContext',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'tick',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'used',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'pending',
                type: 'uint128',
              },
            ],
            internalType: 'struct LoanReceipt.NodeReceipt[]',
            name: 'nodeReceipts',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct LoanReceipt.LoanReceiptV2',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'delegationRegistry',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minShares',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
    ],
    name: 'deposits',
    outputs: [
      {
        internalType: 'uint128',
        name: 'shares',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'redemptionId',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'durations',
    outputs: [
      {
        internalType: 'uint64[]',
        name: '',
        type: 'uint64[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'encodedLoanReceipt',
        type: 'bytes',
      },
    ],
    name: 'liquidate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
    ],
    name: 'liquidityNode',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'tick',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'value',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'shares',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'available',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'pending',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'redemptions',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'prev',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'next',
            type: 'uint128',
          },
        ],
        internalType: 'struct ILiquidity.NodeInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
    ],
    name: 'liquidityNodeWithAccrual',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'tick',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'value',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'shares',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'available',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'pending',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'redemptions',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'prev',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'next',
            type: 'uint128',
          },
        ],
        internalType: 'struct ILiquidity.NodeInfo',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint128',
            name: 'accrued',
            type: 'uint128',
          },
          {
            internalType: 'uint64',
            name: 'rate',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'timestamp',
            type: 'uint64',
          },
        ],
        internalType: 'struct ILiquidity.AccrualInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'startTick',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'endTick',
        type: 'uint128',
      },
    ],
    name: 'liquidityNodes',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'tick',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'value',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'shares',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'available',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'pending',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'redemptions',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'prev',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'next',
            type: 'uint128',
          },
        ],
        internalType: 'struct ILiquidity.NodeInfo[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'receiptHash',
        type: 'bytes32',
      },
    ],
    name: 'loans',
    outputs: [
      {
        internalType: 'enum Pool.LoanStatus',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]',
      },
    ],
    name: 'multicall',
    outputs: [
      {
        internalType: 'bytes[]',
        name: 'results',
        type: 'bytes[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'encodedLoanReceipt',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'proceeds',
        type: 'uint256',
      },
    ],
    name: 'onCollateralLiquidated',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'principal',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'duration',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'collateralToken',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'collateralTokenIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: 'collateralTokenCount',
        type: 'uint256',
      },
      {
        internalType: 'uint128[]',
        name: 'ticks',
        type: 'uint128[]',
      },
      {
        internalType: 'bytes',
        name: 'options',
        type: 'bytes',
      },
    ],
    name: 'quote',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rates',
    outputs: [
      {
        internalType: 'uint64[]',
        name: '',
        type: 'uint64[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'srcTick',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'dstTick',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'redemptionId',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'minShares',
        type: 'uint256',
      },
    ],
    name: 'rebalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'redemptionId',
        type: 'uint128',
      },
    ],
    name: 'redemptionAvailable',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'sharesAhead',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'redemptionId',
        type: 'uint128',
      },
    ],
    name: 'redemptions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'pending',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'index',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'target',
            type: 'uint128',
          },
        ],
        internalType: 'struct Pool.Redemption',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'encodedLoanReceipt',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'principal',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'duration',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: 'maxRepayment',
        type: 'uint256',
      },
      {
        internalType: 'uint128[]',
        name: 'ticks',
        type: 'uint128[]',
      },
    ],
    name: 'refinance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'encodedLoanReceipt',
        type: 'bytes',
      },
    ],
    name: 'repay',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'rate',
        type: 'uint32',
      },
    ],
    name: 'setAdminFeeRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'tick',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'redemptionId',
        type: 'uint128',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawAdminFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class PoolV2__factory {
  static readonly abi = _abi;
  static createInterface(): PoolV2Interface {
    return new utils.Interface(_abi) as PoolV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PoolV2 {
    return new Contract(address, _abi, signerOrProvider) as PoolV2;
  }
}