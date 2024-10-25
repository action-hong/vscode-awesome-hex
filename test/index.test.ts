import { describe, expect, it } from 'vitest'
import { prettierHex } from '../src/core'

describe('should', () => {
  it('add comma and 0x and remove space', () => {
    const res = prettierHex('5F 63   01 01   00 01    00 04         F3 DB 04 67                  03 02', {
      closingDelimiters: ']',
      openingDelimiters: '[',
      separator: ', ',
    })

    expect(res).toMatchInlineSnapshot(`"[0x5F, 0x63, 0x01, 0x01, 0x00, 0x01, 0x00, 0x04, 0xF3, 0xDB, 0x04, 0x67, 0x03, 0x02]"`)
  })
})
