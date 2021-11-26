interface iHextToRgbOptions {
  alpha?: number,
  asCSS?: boolean
}
export const hexToRgb = (hex: string, options: iHextToRgbOptions): string | number[] => {
  const { alpha = -1, asCSS } = options
  const regex = /[0-9A-Fa-f]{6}/g

  if (hex === 'transparent') return hex
  if (alpha < 0) throw new Error('alpha should be between 0 and 1')
    
  const hexWithoutPound = hex.startsWith('#') ? hex.slice(1) : hex
  
  if (!regex.test(hexWithoutPound)) throw new Error('invalid hexadecimal')

  const [r, g, b] = [
    parseInt(Number(`0x${hexWithoutPound.substr(0, 2)}`).toString(), 10),
    parseInt(Number(`0x${hexWithoutPound.substr(2, 2)}`).toString(), 10),
    parseInt(Number(`0x${hexWithoutPound.substr(4, 6)}`).toString(), 10),
  ]
  
  if (asCSS) {
    return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `${r}, ${g}, ${b}`;
  }

  return [r, g, b, alpha]
}