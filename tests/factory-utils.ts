import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { TokenGatedCreated, VoucherCreated } from "../generated/Factory/Factory"

export function createTokenGatedCreatedEvent(
  voucherAddress: Address,
  name: string,
  tokenGatedAddress: Address
): TokenGatedCreated {
  let tokenGatedCreatedEvent = changetype<TokenGatedCreated>(newMockEvent())

  tokenGatedCreatedEvent.parameters = new Array()

  tokenGatedCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voucherAddress",
      ethereum.Value.fromAddress(voucherAddress)
    )
  )
  tokenGatedCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  tokenGatedCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenGatedAddress",
      ethereum.Value.fromAddress(tokenGatedAddress)
    )
  )

  return tokenGatedCreatedEvent
}

export function createVoucherCreatedEvent(
  voucherAddress: Address,
  name: string
): VoucherCreated {
  let voucherCreatedEvent = changetype<VoucherCreated>(newMockEvent())

  voucherCreatedEvent.parameters = new Array()

  voucherCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voucherAddress",
      ethereum.Value.fromAddress(voucherAddress)
    )
  )
  voucherCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return voucherCreatedEvent
}
