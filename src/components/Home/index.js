import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Books That Get YOU Noticed</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqZCPUFU41IgK-ED-0dypBFKLQwFjMUH8DA&usqp=CAU"
          alt="books that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        Books are invaluable gateways to a world of knowledge, serving as timeless companions on the journey of learning. In their pages, one finds the accumulated wisdom of generations, providing insights into diverse subjects and expanding intellectual horizons. Embracing books as learning tools fosters a continuous process of discovery, enabling individuals to stay curious, adapt to change, and develop a well-rounded understanding of the world. In the pursuit of lifelong learning, books remain indispensable catalysts for personal and intellectual growth.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqZCPUFU41IgK-ED-0dypBFKLQwFjMUH8DA&usqp=CAU"
        alt="books that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home