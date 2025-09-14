
export default function DashReviewsMenu({ title='', review='', author='' }){ 
    return (
        <>
            <a className="text-left" href="">
                <div className="flex flex-col gap-3 text-gray-700 hover:text-blue-600">
                    <h3 className="text-2xl text-left">{title}</h3>
                    <p>{review}</p>
                    <p className="text-xs">{author}</p>
                </div>
            </a>
        </>
    )
}