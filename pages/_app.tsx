import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Header from 'components/header'
import store from '../app/store'
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
<ThemeProvider attribute="class" enableSystem={false}>
  <Header />
<Component {...pageProps} />
  </ThemeProvider>
  </Provider>
  </>
}

export default MyApp
