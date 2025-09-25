import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import 'aos/dist/aos.css'   // 👈 Import AOS styles
import { useEffect } from 'react'
import AOS from 'aos'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // whether animation should happen only once
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
