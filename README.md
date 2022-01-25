# base32

encode binary data in human-friendly base32 format

Inspired from https://philzimmermann.com/docs/human-oriented-base-32-encoding.txt

## Features
- Easy to copy and paste
  - Encoded text doesn't contains symbols, hence able to select entirely with double-click
- Easy to read: avoids visually similar characters `0lv2`
  - Omit `0` because it looks like `o`
  - Omit `l` because it looks like `1` and `i`
  - Omit `v` because it looks like `u` and `r`
  - Omit `2` because it looks like `z`
- Case insensitive
- Do not need padding characters
  - Results in shorter encoded text
  - The length may be already known in the context, e.g. sha1://xxxx or md5://xxxx
  - The length can be stored externally explicitly, e.g. 256:xxxx


## Typescript Type Signatures
```typescript
// end-to-end encode/decode functions
export function binary_string_to_base32_string(binary_string: string): string;
export function base32_string_to_binary_string(string: string, bits_len?: number): string;

// helper functions
export function binary_string_to_bits(binary_string: string): Uint8Array;
export function bits_to_base32_string(bits: ArrayLike<number>): string;
export function bits_to_bytes(bits: ArrayLike<number>): Uint8Array;
export function bytes_to_bits(bytes: ArrayLike<number>): Uint8Array;
export function bytes_to_binary_string(bytes: ArrayLike<number>): string;
export function bytes_to_base32_string(bytes: ArrayLike<number>): string;
export function base32_string_to_bytes(string: string, bits_len?: number): Uint8Array;
export function base32_string_to_bits(string: string, bits_len?: number): Uint8Array;
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
