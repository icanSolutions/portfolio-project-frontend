import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./redux/productsSlice";


export default function ProductsList() {
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
    <div className="p-6 space-y-6">
      <h1 className="p-main-h1">Products</h1>
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add Product
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition ml-2">
            Export
          </button>
        </div>
        <div>
          {/* filter or search input */}
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
             
             {/* Filters */}
             <div className="flex flex-row m-10 gap-6 w-full">
               {/* Price */}
               <div className="flex flex-col justify-center items-center w-48">
                 <b>Price</b>
                 <div className="flex flex-row gap-2">
                   <input type="number" name="min" className="w-16 border rounded px-1" /> 
                   <span>-</span> 
                   <input type="number" name="max" className="w-16 border rounded px-1" />
                 </div>
               </div>

               {/* Rating */}
               <div className="flex flex-col justify-center items-center">
                 <b>Rating</b>
               <div className="flex flex-row gap-2">
                 {[1,2,3,4,5].map(star => (
                  <button 
                    key={star} 
                    className="p-1 rounded"
                  >
                    {star}⭐
                  </button>
                ))}
              </div>
              
              </div>
            </div>
            </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
              <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase">Price</th>
              <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map(product => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.price}</td>
                <td className="px-4 py-3">{product.description}</td>
                <td className="px-4 py-3 flex items-center justify-center space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



// export default function Products() {
//     return (
//         <>
//           <div className="flex flex-col justify-center items-center">
//             <h1 className="p-main-h1">Products</h1>
//             {/* Filters */}
//             <div className="flex flex-row m-10 gap-6 w-full">
//               {/* Price */}
//               <div className="flex flex-col justify-center items-center w-48">
//                 <b>Price</b>
//                 <div className="flex flex-row gap-2">
//                   <input type="number" name="min" className="w-16 border rounded px-1" /> 
//                   <span>-</span> 
//                   <input type="number" name="max" className="w-16 border rounded px-1" />
//                 </div>
//               </div>

//               {/* Rating */}
//               <div className="flex flex-col justify-center items-center">
//                 <b>Rating</b>
//               <div className="flex flex-row gap-2">
//                 {[1,2,3,4,5].map(star => (
//                   <button 
//                     key={star} 
//                     className="p-1 rounded"
//                   >
//                     {star}⭐
//                   </button>
//                 ))}
//               </div>
              
//               </div>
//             </div>
//             <div className="flex ">
//                 <table class="min-w-full border border-gray-300">
//                   <thead class="bg-gray-100">
//                     <tr>
//                       <th class="px-4 py-2 border">ID</th>
//                       <th class="px-4 py-2 border">Name</th>
//                       <th class="px-4 py-2 border">Price</th>
//                       <th class="px-4 py-2 border">Description</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {products.map((product) => (
//                       <tr key={product.id} class="hover:bg-gray-50 transition">
//                         <td class="px-4 py-2 border">{product.id}</td>
//                         <td class="px-4 py-2 border">{product.name}</td>
//                         <td class="px-4 py-2 border">{product.price}$</td>
//                         <td class="px-4 py-2 border">{product.description}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//         </>
//     )
// }

// export default function ProductsPage() {
//     return (
//       <div className="flex flex-col min-h-screen">
//         {/* Sidebar Filters */}
//         <aside className="flex flex-row w-1/4 p-4 bg-gray-50 border-r">
//           <h2 className="text-lg font-semibold mb-4">Filters</h2>
//           <input type="text" placeholder="Search..." className="w-full mb-4 p-2 border rounded" />
//           <select className="w-full mb-4 p-2 border rounded">
//             <option>All Categories</option>
//             <option>Electronics</option>
//             <option>Books</option>
//             <option>Clothes</option>
//           </select>
//           <div className="mb-4">
//             <label className="block mb-2">Price range</label>
//             <input type="number" min="0" max="1000" defaultValue={0}/>
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Rating</label>
//             <div className="flex flex-row gap-2">
//               {[1,2,3,4,5].map(star => (
//                 <button key={star} className="p-1 border rounded">{star}⭐</button>
//               ))}
//             </div>
//           </div>
//           <button className="w-full bg-gray-200 p-2 rounded">Reset Filters</button>
//         </aside>
  
//         {/* Product Grid */}
//         <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[...Array(6)].map((_, idx) => (
//             <div key={idx} className=" flex flex-col border rounded-lg p-4 shadow hover:shadow-lg transition">
//               <div className="h-40 bg-gray-200 mb-2 rounded"></div>
//               <h3 className="font-semibold">Product Name</h3>
//               <p className="text-gray-600">$99.99</p>
//               <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
//               <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded">View Details</button>
//             </div>
//           ))}
//         </main>
//       </div>
//     );
//   }