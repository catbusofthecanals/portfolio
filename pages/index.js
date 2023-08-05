import Link from 'next/link'
import Layout from '../components/MyLayout'


// home page
export default () => (
	<Layout>
		<style jsx>{`
        .profile-img {
          padding-top: 4em;
		  padding-bottom: 2em;
          width: 200px;
          border-radius: 50%;
          object-fit: contain;
        }
      `}</style>
	    <img src="/static/images/me.jpeg" className="profile-img"/>
		<h1>Catriona's Web Projects Portfolio</h1>
		<p>Hi, I'm Cat and I'm a web developer in training based in Edinburgh, Scotland. 
		I currently work in digital publishing and Ebook Accessibility, spearheading Accessibility initiatives and consulting on integrating accessible practices into workflows. 
		My current focus is to use underlying Web Development skills to focus on web and digital accessibility.</p>
  </Layout>
)