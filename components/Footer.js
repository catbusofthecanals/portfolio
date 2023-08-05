import Link from 'next/link'
// Footer component
const Footer = () => {

  return (
    <>
    <hr/>
    <div className="container">
    <style jsx>{`
        .container {
          margin: 50px;
          font-size: 0.8rem;
        }
      `}</style>
      <p>
      © {new Date().getFullYear()} Catriona's Portfolio
      </p>
      <p><a href="https://github.com/catbusofthecanals">Github</a></p>
      <p><a href="https://uk.linkedin.com/in/catrionamorrison23">LinkedIn</a></p>
    </div>
    </>
  )
}

export default Footer;