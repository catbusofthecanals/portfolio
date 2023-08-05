import Link from 'next/link'
import Layout from '../components/MyLayout'
// import project data
import { projectData } from '../components/projects';

// route to /projects
export default () => (
	<Layout>
	 <h2>Projects</h2>
	 <style jsx>{`
        .projects-grid {
			padding-top: 2em;
			padding-bottom: 3em;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 3rem;
        }
		@media-screen and (max-width: 768px) {
			.projects-grid {
				grid-template-columns: repeat(1, 1fr);
			}
		}
		.project-card {
			border: 1px solid white;
			padding: 20px;
			border-radius: 3px;
		}
      `}</style>
	 <div className="projects-grid">
		{/* map projects throug project component */}
		{projectData && projectData.map((project) => (
			<div className="project-card" key={project.id}>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<p><a href="{project.link}">{project.link}</a></p>
			</div>
		))}
	 </div>
  </Layout>
)