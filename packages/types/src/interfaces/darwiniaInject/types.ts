// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Option, Struct, Text, U256, U8aFixed, Vec, u128, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId, Balance, BlockNumber, H160, H256, H512, Hash, Index, LockIdentifier } from '@polkadot/types/interfaces/runtime';
import type { RefCount } from '@polkadot/types/interfaces/system';
import { EraIndex }  from '@polkadot/types/interfaces/staking';

/** @name AccountData */
export interface AccountData extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly freeKton: Balance;
  readonly reservedKton: Balance;
}

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly nonce: Index;
  readonly refcount: RefCount;
  readonly data: AccountData;
}

/** @name Address */
export interface Address extends AccountId {}

/** @name AddressT */
export interface AddressT extends U8aFixed {}

/** @name BalanceInfo */
export interface BalanceInfo extends Struct {}

/** @name BalanceLock */
export interface BalanceLock extends Struct {
  readonly id: LockIdentifier;
  readonly lockFor: LockFor;
  readonly reasons: Reasons;
}

/** @name Bloom */
export interface Bloom extends U8aFixed {}

/** @name BridgedBlockHash */
export interface BridgedBlockHash extends H256 {}

/** @name ChainProperties */
export interface ChainProperties extends Struct {
  readonly ss58Format: Option<u8>;
  readonly tokenDecimals: Option<Vec<u32>>;
  readonly tokenSymbol: Option<Vec<Text>>;
}

/** @name Common */
export interface Common extends Struct {
  readonly amount: Balance;
}

/** @name DepositId */
export interface DepositId extends U256 {}

/** @name EcdsaAddress */
export interface EcdsaAddress extends EthereumAddress {}

/** @name EcdsaMessage */
export interface EcdsaMessage extends H256 {}

/** @name EcdsaSignature */
export interface EcdsaSignature extends U8aFixed {}

/** @name ElectionCompute */
export interface ElectionCompute extends Enum {
  readonly isOnChain: boolean;
  readonly isSigned: boolean;
  readonly isAuthority: boolean;
}

/** @name ElectionResultT */
export interface ElectionResultT extends Struct {
  readonly electedStashes: Vec<AccountId>;
  readonly exposures: Vec<ITuple<[AccountId, ExposureT]>>;
  readonly compute: ElectionCompute;
}

/** @name EthashProof */
export interface EthashProof extends Struct {
  readonly dagNodes: ITuple<[H512, H512]>;
  readonly proof: Vec<H128>;
}

/** @name EthereumAddress */
export interface EthereumAddress extends H160 {}

/** @name EthereumBlockNumber */
export interface EthereumBlockNumber extends u64 {}

/** @name EthereumHeader */
export interface EthereumHeader extends Struct {
  readonly parentHash: H256;
  readonly timestamp: u64;
  readonly number: EthereumBlockNumber;
  readonly author: EthereumAddress;
  readonly transactionsRoot: H256;
  readonly unclesHash: H256;
  readonly extraData: Bytes;
  readonly stateRoot: H256;
  readonly receiptsRoot: H256;
  readonly logBloom: Bloom;
  readonly gasUsed: U256;
  readonly gasLimit: U256;
  readonly difficulty: U256;
  readonly seal: Vec<Bytes>;
  readonly blockHash: Option<H256>;
}

/** @name EthereumNetworkType */
export interface EthereumNetworkType extends Enum {
  readonly isMainnet: boolean;
  readonly isRopsten: boolean;
}

/** @name EthereumReceipt */
export interface EthereumReceipt extends Struct {
  readonly gasUsed: U256;
  readonly logBloom: Bloom;
  readonly logs: Vec<LogEntry>;
  readonly outcome: TransactionOutcome;
}

/** @name EthereumReceiptProof */
export interface EthereumReceiptProof extends Struct {
  readonly index: u64;
  readonly proof: Bytes;
  readonly headerHash: H256;
}

/** @name EthereumReceiptProofThing */
export interface EthereumReceiptProofThing extends ITuple<[EthereumHeader, EthereumReceiptProof, MMRProof]> {}

/** @name EthereumRelayHeaderParcel */
export interface EthereumRelayHeaderParcel extends Struct {
  readonly header: EthereumHeader;
  readonly parentMmrRoot: H256;
}

/** @name EthereumRelayProofs */
export interface EthereumRelayProofs extends Struct {
  readonly ethashProof: Vec<EthashProof>;
  readonly mmrProof: Vec<H256>;
}

/** @name EthereumTransactionIndex */
export interface EthereumTransactionIndex extends ITuple<[H256, u64]> {}

/** @name Exposure */
export interface Exposure extends ExposureT {}

/** @name ExposureT */
export interface ExposureT extends Struct {
  readonly ownRingBalance: Compact<Balance>;
  readonly ownKtonBalance: Compact<Balance>;
  readonly ownPower: Power;
  readonly totalPower: Power;
  readonly others: Vec<IndividualExposure>;
}

/** @name H128 */
export interface H128 extends U8aFixed {}

/** @name IndividualExposure */
export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly ringBalance: Compact<Balance>;
  readonly ktonBalance: Compact<Balance>;
  readonly power: Power;
}

/** @name KtonBalance */
export interface KtonBalance extends Balance {}

/** @name LaneId */
export interface LaneId extends U8aFixed {}

/** @name LockFor */
export interface LockFor extends Enum {
  readonly isCommon: boolean;
  readonly asCommon: Common;
  readonly isStaking: boolean;
  readonly asStaking: StakingLock;
}

/** @name LogEntry */
export interface LogEntry extends Struct {}

/** @name LookupSource */
export interface LookupSource extends AccountId {}

/** @name MappedRing */
export interface MappedRing extends u128 {}

/** @name MerkleMountainRangeRootLog */
export interface MerkleMountainRangeRootLog extends Struct {
  readonly prefix: U8aFixed;
  readonly ParentMmrRoot: Hash;
}

/** @name MessageId */
export interface MessageId extends ITuple<[LaneId, MessageNonce]> {}

/** @name MessageKey */
export interface MessageKey extends Struct {
  readonly laneId: LaneId;
  readonly nonce: MessageNonce;
}

/** @name MessageNonce */
export interface MessageNonce extends u64 {}

/** @name MessagePayload */
export interface MessagePayload extends Bytes {}

/** @name MMRProof */
export interface MMRProof extends Struct {
  readonly memberLeafIndex: u64;
  readonly lastLeafIndex: u64;
  readonly proof: Vec<H256>;
}

/** @name MMRRoot */
export interface MMRRoot extends Hash {}

/** @name OpCode */
export interface OpCode extends U8aFixed {}

/** @name OtherAddress */
export interface OtherAddress extends Enum {
  readonly isEth: boolean;
  readonly asEth: EthereumAddress;
  readonly isTron: boolean;
  readonly asTron: TronAddress;
}

/** @name OtherSignature */
export interface OtherSignature extends Enum {
  readonly isEth: boolean;
  readonly asEth: EcdsaSignature;
  readonly isTron: boolean;
  readonly asTron: EcdsaSignature;
}

/** @name PalletId */
export interface PalletId extends LockIdentifier {}

/** @name Power */
export interface Power extends u32 {}

/** @name Reasons */
export interface Reasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
}

/** @name RedeemFor */
export interface RedeemFor extends Enum {
  readonly isToken: boolean;
  readonly isDeposit: boolean;
}

/** @name RelayAuthorityMessage */
export interface RelayAuthorityMessage extends EcdsaMessage {}

/** @name RelayAuthoritySignature */
export interface RelayAuthoritySignature extends EcdsaSignature {}

/** @name RelayAuthoritySigner */
export interface RelayAuthoritySigner extends EcdsaAddress {}

/** @name RelayAuthorityT */
export interface RelayAuthorityT extends Struct {
  readonly accountId: AccountId;
  readonly signer: Signer;
  readonly stake: Balance;
  readonly term: BlockNumber;
}

/** @name RingBalance */
export interface RingBalance extends Balance {}

/** @name RKT */
export interface RKT extends Struct {
  readonly r: Balance;
  readonly k: Balance;
}

/** @name ScheduledAuthoritiesChangeT */
export interface ScheduledAuthoritiesChangeT extends Struct {
  readonly nextAuthorities: Vec<RelayAuthorityT>;
  readonly deadline: BlockNumber;
}

/** @name Signer */
export interface Signer extends EthereumAddress {}

/** @name SpanRecord */
export interface SpanRecord extends Struct {
  readonly slashed: RKT;
  readonly paidOut: RKT;
}

/** @name StakingBalanceT */
export interface StakingBalanceT extends Enum {
  readonly isRingBalance: boolean;
  readonly asRingBalance: Balance;
  readonly isKtonBalance: boolean;
  readonly asKtonBalance: Balance;
}

/** @name StakingLedgerT */
export interface StakingLedgerT extends Struct {
  readonly stash: AccountId;
  readonly activeRing: Compact<Balance>;
  readonly activeDepositRing: Compact<Balance>;
  readonly activeKton: Compact<Balance>;
  readonly depositItems: Vec<TimeDepositItem>;
  readonly ringStakingLock: StakingLock;
  readonly ktonStakingLock: StakingLock;
  readonly claimedRewards: Vec<EraIndex>;
}

/** @name StakingLock */
export interface StakingLock extends Struct {
  readonly stakingAmount: Balance;
  readonly unbondings: Vec<Unbonding>;
}

/** @name Term */
export interface Term extends BlockNumber {}

/** @name TimeDepositItem */
export interface TimeDepositItem extends Struct {
  readonly value: Compact<Balance>;
  readonly startTime: Compact<TsInMs>;
  readonly expireTime: Compact<TsInMs>;
}

/** @name TransactionOutcome */
export interface TransactionOutcome extends Struct {}

/** @name TreasuryProposal */
export interface TreasuryProposal extends Struct {
  readonly proposer: AccountId;
  readonly beneficiary: AccountId;
  readonly ringValue: Balance;
  readonly ktonValue: Balance;
  readonly ringBond: Balance;
  readonly ktonBond: Balance;
}

/** @name TronAddress */
export interface TronAddress extends EthereumAddress {}

/** @name TsInMs */
export interface TsInMs extends u64 {}

/** @name UnappliedSlash */
export interface UnappliedSlash extends Struct {
  readonly validator: AccountId;
  readonly own: RKT;
  readonly others: Vec<ITuple<[AccountId, RKT]>>;
  readonly reporters: Vec<AccountId>;
  readonly payout: RKT;
}

/** @name Unbonding */
export interface Unbonding extends Struct {
  readonly amount: Balance;
  readonly moment: BlockNumber;
}

export type PHANTOM_DARWINIAINJECT = 'darwiniaInject';
