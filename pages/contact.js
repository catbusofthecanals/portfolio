import Link from 'next/link'
import Layout from '../components/MyLayout'

// route to /contact
export default () => (
	<Layout>
	    <h2>Get in touch!</h2>
		<p>If you're interested in any of the work outlined here or just fancy a message, I can be reached at the link below:</p>
		<a href="mailto:catrionamorrison13@gmail.com">Say Hello!</a>
  </Layout>
)