import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../src/firebase'
import {Provider} from "react-redux";
import setupStore from "../src/store/store";
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  const store = setupStore()
  return (
      <Provider store={store}>
          <NextUIProvider>
              <Component {...pageProps} />
          </NextUIProvider>
      </Provider>
  )
}
