import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../firebase'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
