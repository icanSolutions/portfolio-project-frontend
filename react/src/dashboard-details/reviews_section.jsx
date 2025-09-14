import DashReviewsMenu from './dash-reviews-menu';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from '../redux/reviewSlice';

const reviews = [
    {
        id: 1,
        product_id: 5,
        user_name: "mor barda",
        rating: 4,
        comment: "Greate product!",
        created_at: "10/08/25"
    },
    {
        id: 2,
        product_id: 5,
        user_name: "mor barda 2",
        rating: 3,
        comment: "Greate product 2!",
        created_at: "09/08/25"
    },
    {
        id: 3,
        product_id: 4,
        user_name: "mor barda",
        rating: 2,
        comment: "bauf!",
        created_at: "08/08/25"
    },
    {
        id: 4,
        product_id: 1,
        user_name: "mor barda_1",
        rating: 5,
        comment: "Greate product!!!!!",
        created_at: "11/08/25"
    }
]

export default function ReviewsSection() {
    const dispatch = useDispatch();

    // Get products from Redux store
    const { items: reviews, status, error } = useSelector(state => state.reviews);

    // Fetch products when component mounts
    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    if (status === "loading") return <p>Loading reviews...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
    return (
        <>
            <div className='bg-gray-100 border-2 shadow-xl rounded-xl p-8'>
                <h4 className="text-xl font-semibold mb-4 text-blue-700">Last Reviews</h4>
                <div className= 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {reviews.map(review => (
                    <div className='bg-gray-50 shadow-xl rounded-xl p-2 hover:scale-105 transition duration-300'>
                    <DashReviewsMenu
                    key={review.id}
                    title={review.product_id}
                    review={review.comment}
                    author={review.user_name} 
                    />
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}