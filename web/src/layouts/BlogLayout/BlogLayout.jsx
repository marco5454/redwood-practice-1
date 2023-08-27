import { Link, routes } from "@redwoodjs/router"
import '../BlogLayout/Blog.css'

const BlogLayout = ({ children }) => {
  return (
    <div>
      <header>
          <nav>
            <div className="nav-wrapper">
              <ul>
                <li>
                  <Link to = {routes.home()}><a>Home</a></Link>
                </li>
                <li>
                  <Link to = {routes.about()}><a>About</a></Link>
                </li>
                <li>
                  <Link to = {routes.contact()}><a>Contact</a></Link>
                </li>
              </ul>
            </div>
          </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer-wrapper">
          <div className="icon-logo"></div>
          <div className="copyright-statement"></div>
        </div>
      </footer>
    </div>
  )
}

export default BlogLayout
