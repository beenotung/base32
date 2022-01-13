import { expect } from 'chai'
import {
  binary_string_to_string,
  string_to_bytes,
  bytes_to_binary_string,
} from '../src/base32'

it('e2e test', () => {
  let binary_string = 'apple'
  let string = binary_string_to_string(binary_string)
  let bytes = string_to_bytes(string)
  let res = bytes_to_binary_string(bytes)
  console.log(res)
  expect(res).to.equals('apple')
})
