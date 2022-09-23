import { BigInt } from '@graphprotocol/graph-ts'
import {
  Factory,
  TokenGatedCreated,
  VoucherCreated,
} from '../generated/Factory/Factory'
import { Voucher } from '../generated/schema'

export function handleTokenGatedCreated(event: TokenGatedCreated): void {
  const voucher = new Voucher(event.params.voucherAddress.toHexString())
  voucher.Name = event.params.name
  voucher.Address = event.params.voucherAddress.toHexString()
  voucher.TokenGateAddress = event.params.tokenGatedAddress.toHexString()
  voucher.Type = 'TokenGated'
  voucher.save()
}

export function handleVoucherCreated(event: VoucherCreated): void {
  const voucher = new Voucher(event.params.voucherAddress.toHexString())
  voucher.Name = event.params.name
  voucher.Address = event.params.voucherAddress.toHexString()
  voucher.Type = 'Free-Mint'
  voucher.save()
}
