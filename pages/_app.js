import 'tailwindcss/tailwind.css';
import '../src/App.css'
import '../src/index.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp