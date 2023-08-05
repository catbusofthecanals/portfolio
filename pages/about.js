//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

// route to /about
export default () => (
	<Layout>
	<style jsx>{`
        .container {
			padding-top: 2em;
			padding-bottom: 3em;
			
        }
		
      `}</style>
	 <h2>About Me</h2>
	 <div className="container">
	  <p>Highly experienced in digital publishing and Ebook Accessibility, with a proven track record in Ebooks and Audio publishing, I have a demonstrated history of five years of experience managing digital products across trade and academic settings as well as spearheading Accessibility initiatives and consulting on integrating accessible practices into workflows. 
		 My current focus is training in Web Development through the Hyperion Dev and University of Edinburgh Web Development bootcamp to use underlying Web Development skills to focus on web and digital accessibility.</p>
	  <p>In my web development training, I have been passionate about creating responsive web projects with an elegant but easy to understand UI. I have built a wide range of projects using various tools and frameworks from React, Node.js, Express and MongoDB. I am highly skilled in HTML, CSS and Javascript.</p>
	  </div>
  </Layout>
)