import React from 'react'
import CanvasNest from './CanvasNest'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout: React.FC = ({ children }) => {
	return (
		<div className="min-h-screen">
			<Head>
				<title>Zeekrs' Blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<main className="max-w-screen-lg mx-auto py-4">{children}</main>
			<Footer />
			<CanvasNest />
		</div>
	)
}

export default Layout
