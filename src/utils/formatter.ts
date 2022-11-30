export const dateFormatter = new Intl.DateTimeFormat('pt-BR')
export const dateFormatterGetMonth = new Intl.DateTimeFormat('pt-Br', {
  month: 'short',
})
export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function capitalizeFirstLetter(character: string) {
  return character.charAt(0).toUpperCase() + character.slice(1)
}
