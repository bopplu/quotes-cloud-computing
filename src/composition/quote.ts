export default function useQuote() {
  const getQuote = async () => {
    const data = await fetch('https://flockcomp.com/quotes/random', {
      method: 'GET',
    })
    const { text }: { index: string; text: string } = await data.json()
    return text
  }

  return { getQuote }
}
