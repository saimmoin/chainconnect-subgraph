import {
  AccountCreated as AccountCreatedEvent,
  AdminChanged as AdminChangedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  InfoChanged as InfoChangedEvent,
  PostBid as PostBidEvent,
  PostBought as PostBoughtEvent,
  PostChanged as PostChangedEvent,
  PostCreated as PostCreatedEvent,
  PostSold as PostSoldEvent,
  RewardClaimed as RewardClaimedEvent,
  Transfer as TransferEvent
} from "../generated/ChainConnect/ChainConnect"
import {
  AccountCreated,
  AdminChanged,
  Approval,
  ApprovalForAll,
  InfoChanged,
  PostBid,
  PostBought,
  PostChanged,
  PostCreated,
  PostSold,
  RewardClaimed,
  Transfer,
  UserRewards
} from "../generated/schema"

export function handleAccountCreated(event: AccountCreatedEvent): void {
  let entity = new AccountCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.userName = event.params.userName
  entity.displayName = event.params.displayName
  entity.bio = event.params.bio
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.caller = event.params.caller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInfoChanged(event: InfoChangedEvent): void {
  let entity = new InfoChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.displayName = event.params.displayName
  entity.bio = event.params.bio
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostBid(event: PostBidEvent): void {
  let entity = new PostBid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.value = event.params.value
  entity.postId = event.params.postId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostBought(event: PostBoughtEvent): void {
  let entity = new PostBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.value = event.params.value
  entity.tokenID = event.params.tokenID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostChanged(event: PostChangedEvent): void {
  let entity = new PostChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.bidDuration = event.params.bidDuration
  entity.sellValue = event.params.sellValue
  entity.buyStatus = event.params.buyStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tokenID = event.params.tokenID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostSold(event: PostSoldEvent): void {
  let entity = new PostSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lastBidder = event.params.lastBidder
  entity.bidValue = event.params.bidValue
  entity.postID = event.params.postID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardClaimed(event: RewardClaimedEvent): void {

  let user = UserRewards.load(event.params.user);
  
  if (!user) {
    user = new UserRewards(event.params.user);
  }

  user.rewardClaimed = event.params.reward
  user.claimedAt = event.block.timestamp
  user.totalClaimed = user.totalClaimed.plus(event.params.reward)
  user.transactionHash = event.transaction.hash
  user.save();

  let entity = new RewardClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reward = event.params.reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
