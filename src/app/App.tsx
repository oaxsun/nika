import { useEffect, useState } from 'react'
import HomeScreen from '../screens/HomeScreen'
import MobileOnlyScreen from './MobileOnlyScreen'

const MOBILE_MAX_WIDTH = 768

function useMobileOnly() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.innerWidth <= MOBILE_MAX_WIDTH
  })

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return isMobile
}

export default function App() {
  const isMobile = useMobileOnly()

  if (!isMobile) return <MobileOnlyScreen />

  return <HomeScreen />
}
