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

