import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DashProductsMenu from "./dash-products-menu-single";
import { fetchProducts } from "../redux/productsSlice";
// const products = [
//     {
//         id: 1,
//         name: "Keyboard support",
//         description: "a desk keyboard support",
//         price: 100
//     },
//     {
//         id: 2,
//         name: "Mouse",
//         description: "a copmuter mouse",
//         price: 50
//     },
//     {
//         id: 3,
//         name: "coffee desk cup",
//         description: "special desk coffe cup - Prevents drink spillage",
//         price: 80
//     },
//     {
//         id: 4,
//         name: "magnetic pen",
//         description: "magnetic pen for each storage on magnetic board",
//         price: 20
//     },
// ]

export default function ProductsSection() {
    const dispatch = useDispatch();

    // Get products from Redux store
    const { items: products, status, error } = useSelector(state => state.products);

    // Fetch products when component mounts
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") return <p>Loading products...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
    return (
        <>
            <div className='bg-gray-100 border-2 shadow-xl rounded-xl p-8'>
                <h4 className="text-xl font-semibold mb-4 text-blue-700">Last Products</h4>
                <div className= 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map(product => (
                    <div className='bg-gray-50 shadow-xl rounded-xl p-2 hover:scale-105 transition duration-300'>
                    <DashProductsMenu
                        key={product.id}
                        title={product.name}
                        description={product.description}
                        price={product.price} 
                    />
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}