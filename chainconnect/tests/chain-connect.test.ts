import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AccountCreated } from "../generated/schema"
import { AccountCreated as AccountCreatedEvent } from "../generated/ChainConnect/ChainConnect"
import { handleAccountCreated } from "../src/chain-connect"
import { createAccountCreatedEvent } from "./chain-connect-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let userName = "Example string value"
    let displayName = "Example string value"
    let bio = "Example string value"
    let image = "Example string value"
    let newAccountCreatedEvent = createAccountCreatedEvent(
      user,
      userName,
      displayName,
      bio,
      image
    )
    handleAccountCreated(newAccountCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccountCreated created and stored", () => {
    assert.entityCount("AccountCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccountCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AccountCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userName",
      "Example string value"
    )
    assert.fieldEquals(
      "AccountCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "displayName",
      "Example string value"
    )
    assert.fieldEquals(
      "AccountCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bio",
      "Example string value"
    )
    assert.fieldEquals(
      "AccountCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "image",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
