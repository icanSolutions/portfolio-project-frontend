import './App.css'

export default function OpeningPage(){
    return(
        <>
        <h1 className='main-h1 text-4xl font-bold text-blue-600'>Welcom To The Products-Reviews DevOps Project</h1>
      <div className='main-div'>
      
        <p className='main-p'>Here you can see  products and <b>read</b>/<b>create</b> reviews for each</p>
        <p className='button-p'>Choose a page from the sidebar menu to discover my app</p>
        {/* <button className='products-button'>Products</button> */}
      </div>
      </>
    )
}