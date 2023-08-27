import '../HomePage/Home.css'
import { MetaTags } from '@redwoodjs/web'
import img from '../../img/profile.jpg'

const HomePage = () => {
  return (
    <div className='container'>
      <MetaTags title="Home" description="Home page" />

      <div className="home-wrapper">
        <div className="photo-img">
          <img src={img} alt="profile" />
        </div>
        <div className="welcome-message">
          <h1>Photography is my Life</h1>
          <p>I love nature, birds, rocks, and you. Ayeee...</p>
        </div>
      </div>

    </div>
  )
}

export default HomePage
