export function prettierHex(str: string) {

  // 去掉所有空格
  const s = str.replace(/\s/g, '')

  //
  if (/^[0-9A-F]+$/i.test(s) && s.length % 2 === 0) {
    let res = ''
    for (let i = 0; i < s.length; i += 2) {
      res += `0x${s.slice(i, i + 2).toUpperCase()}`

      if (i < s.length - 2) {
        res += ', '
      }
    }

    return res
  }

  return ''
}