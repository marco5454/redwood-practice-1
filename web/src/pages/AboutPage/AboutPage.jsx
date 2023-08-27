import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.jsx</code>
      </p>
    </>
  )
}

export default AboutPage
