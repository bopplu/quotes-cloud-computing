export default function useQuote() {
  const getQuote = async () => {
    const data = await fetch('http://34.102.191.29/quotes/random', {
      method: 'GET',
    })
    const { text }: { index: string; text: string } = await data.json()
    return text
  }

  return { getQuote }
}
