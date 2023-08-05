import Link from 'next/link'
/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const layoutStyle = {
    margin: 20,
    padding: 20,
}

const Layout = (props) => (
   <div>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossOrigin="anonymous"
		/>
	</Head>
	{/* pass props throughout layout component */}
  	<div style={layoutStyle}>
    	<Header />
    	{props.children}
		<Footer />
  	</div>
	{/* use global styles throughout */}
	  <style jsx global>{`
      body {
		margin: 0;
		padding: 0;
		font-size: 18px;
		line-height: 1.8;
		background-color: #DFD0DC;
		font-family: sans-serif;

	  }
	  h1 {
		margin-bottom: 30px;
	  }
	  h2 {
		margin-bottom: 25px;
		margin-top: 2em;
	  }
	  p {
		margin-bottom: 20px;
	  }
    `}</style>
  </div>
)

export default Layout
