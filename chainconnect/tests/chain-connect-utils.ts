import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
  Transfer
} from "../generated/ChainConnect/ChainConnect"

export function createAccountCreatedEvent(
  user: Address,
  userName: string,
  displayName: string,
  bio: string,
  image: string
): AccountCreated {
  let accountCreatedEvent = changetype<AccountCreated>(newMockEvent())

  accountCreatedEvent.parameters = new Array()

  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("userName", ethereum.Value.fromString(userName))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "displayName",
      ethereum.Value.fromString(displayName)
    )
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return accountCreatedEvent
}

export function createAdminChangedEvent(
  oldAdmin: Address,
  newAdmin: Address,
  caller: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return adminChangedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createInfoChangedEvent(
  displayName: string,
  bio: string,
  image: string
): InfoChanged {
  let infoChangedEvent = changetype<InfoChanged>(newMockEvent())

  infoChangedEvent.parameters = new Array()

  infoChangedEvent.parameters.push(
    new ethereum.EventParam(
      "displayName",
      ethereum.Value.fromString(displayName)
    )
  )
  infoChangedEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )
  infoChangedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return infoChangedEvent
}

export function createPostBidEvent(
  user: Address,
  value: BigInt,
  postId: BigInt
): PostBid {
  let postBidEvent = changetype<PostBid>(newMockEvent())

  postBidEvent.parameters = new Array()

  postBidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  postBidEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  postBidEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )

  return postBidEvent
}

export function createPostBoughtEvent(
  user: Address,
  value: BigInt,
  tokenID: BigInt
): PostBought {
  let postBoughtEvent = changetype<PostBought>(newMockEvent())

  postBoughtEvent.parameters = new Array()

  postBoughtEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  postBoughtEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  postBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )

  return postBoughtEvent
}

export function createPostChangedEvent(
  postId: BigInt,
  bidDuration: BigInt,
  sellValue: BigInt,
  buyStatus: i32
): PostChanged {
  let postChangedEvent = changetype<PostChanged>(newMockEvent())

  postChangedEvent.parameters = new Array()

  postChangedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam(
      "bidDuration",
      ethereum.Value.fromUnsignedBigInt(bidDuration)
    )
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam(
      "sellValue",
      ethereum.Value.fromUnsignedBigInt(sellValue)
    )
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam(
      "buyStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(buyStatus))
    )
  )

  return postChangedEvent
}

export function createPostCreatedEvent(
  user: Address,
  tokenID: BigInt
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )

  return postCreatedEvent
}

export function createPostSoldEvent(
  lastBidder: Address,
  bidValue: BigInt,
  postID: BigInt
): PostSold {
  let postSoldEvent = changetype<PostSold>(newMockEvent())

  postSoldEvent.parameters = new Array()

  postSoldEvent.parameters.push(
    new ethereum.EventParam(
      "lastBidder",
      ethereum.Value.fromAddress(lastBidder)
    )
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam(
      "bidValue",
      ethereum.Value.fromUnsignedBigInt(bidValue)
    )
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam("postID", ethereum.Value.fromUnsignedBigInt(postID))
  )

  return postSoldEvent
}

export function createRewardClaimedEvent(
  user: Address,
  reward: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return rewardClaimedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
