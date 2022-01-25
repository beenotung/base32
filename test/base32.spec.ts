import { expect } from 'chai'
import {
  binary_string_to_base32_string,
  base32_string_to_binary_string,
  base32_string_to_bits,
} from '../src/base32'

it('e2e test', () => {
  let binary_string = 'apple'
  let base32 = binary_string_to_base32_string(binary_string)
  let res = base32_string_to_binary_string(base32)
  expect(res).to.equals(binary_string)
})

it('should be case insensitive', () => {
  let text = 'apple'
  let base32 = binary_string_to_base32_string(text)
  expect(base32).to.match(/[a-zA-Z]/)
  expect(base32_string_to_binary_string(base32.toLowerCase())).to.equals(text)
  expect(base32_string_to_binary_string(base32.toUpperCase())).to.equals(text)
})

it('should output base32 in lower case', () => {
  let base32 = binary_string_to_base32_string('apple')
  expect(base32).to.match(/[a-z]/)
  expect(base32).not.to.match(/[A-Z]/)
})

describe('avoided characters', () => {
  function test(char: string) {
    it(`should reject "${char}"`, () => {
      expect(() => base32_string_to_bits(char)).to.throw(
        `Invalid character: "${char}"`,
      )
    })
  }
  test('0')
  test('l')
  test('v')
  test('2')

  test('L')
  test('V')
})
