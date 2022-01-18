# base32

encode binary data in base32

Inspired from https://philzimmermann.com/docs/human-oriented-base-32-encoding.txt

## Features
- Avoids visually similar characters `0lv2`
  - Omit `0` because it looks like `o`
  - Omit `l` beacase it looks like `1` and `i`
  - Omit `v` because it looks like `u` and `r`
  - Omit `2` because it looks like `z`
- Case insensitive
- Do not need padding characters
  - Results in shorter encoded text
  - The length may be already known in the context, e.g. sha1://xxxx or md5://xxxx
  - The length can be stated explicitly, e.g. 256:xxxx


## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
