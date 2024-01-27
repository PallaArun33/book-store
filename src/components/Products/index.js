import AllProductsSection from '../AllProductsSection'
import BookSliderSection from '../BookSliderSection'

import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <BookSliderSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products