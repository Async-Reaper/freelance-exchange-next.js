import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../src/firebase'
import {Provider} from "react-redux";
import setupStore from "../src/store/store";
import {NextUIProvider} from "@nextui-org/react";
import {Roboto} from "@next/font/google";
import {createTheme} from "@nextui-org/react";

const store = setupStore()

const roboto = Roboto({
    weight: ['300', '400', '700'],
    subsets: ['latin']
})

const theme = createTheme({
    type: "dark",
    theme: {
        colors: {
            primaryLight: '$blue200',
            primaryLightHover: '$blue300',
            primaryLightActive: '$blue400',
            primaryLightContrast: '$blue600',
            primary: '#3694ff',
            primaryBorder: '$blue500',
            primaryBorderHover: '$blue600',
            primarySolidHover: '$blue700',
            primarySolidContrast: '$white',
            primaryShadow: '$blue500',
            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#3694ff',
            background: '#1f1f1f',
        }
    }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <NextUIProvider theme={theme}>
              <main className={roboto.className}>
                  <Component  {...pageProps} />
              </main>
          </NextUIProvider>
      </Provider>
  )
}
