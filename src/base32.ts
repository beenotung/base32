let char_to_code: Record<string, number> = {}

// 0 -> o
// l -> 1 or i
// v -> u or r
// 2 -> z

let code_to_char: string[] = []
for (let i = 0; i < 10; i++) {
  code_to_char.push(i.toString())
}
for (let i = 0; i < 26; i++) {
  code_to_char.push(String.fromCharCode(65 + 32 + i))
}

let skip_char_list = ['0', 'l', 'v', '2']

for (let char of skip_char_list) {
  let index = code_to_char.indexOf(char)
  code_to_char.splice(index, 1)
}
for (let code = 0; code < code_to_char.length; code++) {
  let char = code_to_char[code]
  char_to_code[char] = code
}

const N_BIT = Math.log2(code_to_char.length)

export function bits_to_string(bits: ArrayLike<number>) {
  let bits_len = bits.length
  let string_len = Math.ceil(bits_len / N_BIT)
  let char_buffer = new Array(string_len)
  for (let char_index = 0, bit_index = 0; bit_index < bits_len; char_index++) {
    let code = 0
    for (let i = 0; i < N_BIT && bit_index < bits_len; i++, bit_index++) {
      code = (code << 1) | bits[bit_index]
    }
    let char = code_to_char[code]
    char_buffer[char_index] = char
  }
  return char_buffer.join('')
}

export function string_to_bits(string: string, bits_len = string.length * 5) {
  let bits = new Uint8Array(bits_len)
  let string_len = string.length
  for (
    let string_index = 0, bit_index = 0;
    string_index < string_len;
    string_index++
  ) {
    let char = string[string_index]
    let code = char_to_code[char]
    for (let i = N_BIT - 1; i >= 0 && bit_index < bits_len; i--) {
      bits[bit_index + i] = code & 1
      code = code >> 1
    }
    bit_index += N_BIT
  }
  return bits
}

export function bytes_to_bits(bytes: ArrayLike<number>) {
  let bytes_len = bytes.length
  let bits = new Uint8Array(bytes_len * 8)
  for (
    let byte_index = 0, bit_index = 0;
    byte_index < bytes_len;
    byte_index++
  ) {
    let byte = bytes[byte_index]
    for (let i = 7; i >= 0; i--) {
      bits[bit_index + i] = byte & 1
      byte = byte >> 1
    }
    bit_index += 8
  }
  return bits
}

export function bits_to_bytes(bits: ArrayLike<number>) {
  let bits_len = bits.length
  let byte_len = Math.ceil(bits_len / 8)
  let bytes = new Uint8Array(byte_len)
  for (let byte_index = 0, bit_index = 0; bit_index < bits_len; byte_index++) {
    let byte = 0
    for (let i = 7; i >= 0 && bit_index < bits_len; i--, bit_index++) {
      byte = (byte << 1) | bits[bit_index]
    }
    bytes[byte_index] = byte
  }
  return bytes
}

export function bytes_to_string(bytes: ArrayLike<number>) {
  let bits = bytes_to_bits(bytes)
  let string = bits_to_string(bits)
  return string
}

export function string_to_bytes(string: string, bits_len?: number) {
  let bits = string_to_bits(string, bits_len)
  let bytes = bits_to_bytes(bits)
  return bytes
}

export function binary_string_to_bits(binary_string: string) {
  let byte_len = binary_string.length
  let bits = new Uint8Array(byte_len * 8)
  for (
    let string_index = 0, bit_index = 0;
    string_index < byte_len;
    string_index++
  ) {
    let byte = binary_string.charCodeAt(string_index)
    for (let i = 7; i >= 0; i--) {
      bits[bit_index + i] = byte & 1
      byte = byte >> 1
    }
    bit_index += 8
  }
  return bits
}

export function bytes_to_binary_string(bytes: ArrayLike<number>) {
  let bytes_len = bytes.length
  let string = ''
  for (let i = 0; i < bytes_len; i++) {
    string += String.fromCharCode(bytes[i])
  }
  return string
}

export function binary_string_to_string(binary_string: string) {
  let bits = binary_string_to_bits(binary_string)
  let string = bits_to_string(bits)
  return string
}
