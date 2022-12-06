import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../src/firebase'
import {Provider} from "react-redux";
import setupStore from "../src/store/store";

export default function App({ Component, pageProps }: AppProps) {
  const store = setupStore()
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
