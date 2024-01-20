const isForbidden = (key: string) => {
  if (key.includes('margin') || key.includes('padding')) return true

  return ['bg', 'pr', 'pt', 'pl', 'pb', 'mt', 'mb', 'mr', 'lr', 'sx', 'm', 'p', 'style'].includes(key)
}

const applyKebabCase = (value: string) => value
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  ?.map((word: string) => word.toLowerCase())
  .join('-')
  .replace(/([^\d])(\d)/g, "$1-$2") || ''

const getCssProperty = (key: string, value: string) => `
  ${applyKebabCase(key)}: ${value}
`

export const applyProps = (props: Record<string, any>): string => {
  return Object.entries(props).map(([key, value]) => {
    if (!key) return ''

    if (key === 'sx') return applyProps(value)
    if (key.includes('@')) {
      return `
        ${key}{
          ${applyProps(value)}
        }
      `
    }

    if (typeof value === 'string' && !isForbidden(key) && CSS.supports(applyKebabCase(key), value)) {
      return getCssProperty(key, value)
    }

    return ''
  }).join(';')
}