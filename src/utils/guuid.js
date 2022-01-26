
export const guid = () => {
  return Date.now().toString() + (Math.random() * 10)
}
