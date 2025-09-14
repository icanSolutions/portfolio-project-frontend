import ReviewsSection from './dashboard-details/reviews_section';
import ProductsSection from './dashboard-details/products-section';
import ProductsPage from './products';

export default function DashContent() {
    return (
        <div className='grid grid-cols-1  gap-5'>
            <ReviewsSection />
            <ProductsSection />
        </div>
    )
  }
