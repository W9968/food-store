import { useState, useEffect } from 'react'

export function useMediaQuery(query: number): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${query}px)`)
    media.matches !== matches && setMatches(media.matches)

    const listener = (): void => {
      setMatches(media.matches)
    }

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
