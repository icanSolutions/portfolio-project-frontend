
export default function DashProductsMenu({ title='', description='', price='' }){ 
    return (
        <>
            <a className="text-left" href="">
                <div className="flex flex-col gap-3 text-gray-700 hover:text-blue-600">
                    <h3 className="text-2xl text-left">{title}</h3>
                    <p className="text-xs"><b>Desc: </b>{description}</p>
                    <p className="text-s"><b>Price: </b>{price}$</p>
                </div>
            </a>
        </>
    )
}