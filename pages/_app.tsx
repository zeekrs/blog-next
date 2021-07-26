import "../styles/globals.css"
import type { AppProps } from "next/app"

console.log("test")

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp
