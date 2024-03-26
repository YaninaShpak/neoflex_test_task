export const sumTotalPrice = (array) => {
  return array.reduce((acc, curr) => (acc + (curr.price * curr.count)), 0)
}