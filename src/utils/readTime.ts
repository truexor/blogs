
export const calculateReadingTime = (wordCount: number, wordsPerMinute = 175) => {
  if (wordCount === 0) return 0
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}