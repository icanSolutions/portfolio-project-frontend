import { GrTechnology } from "react-icons/gr";


export default function Header(){
    return(
        <>
            <div className=" flex w-screen  shadow-2xs p-5 align-top bg-gray-200 justify-center fixed top-0">
                <a className=" text-blue-300" href="">< GrTechnology size={24} /></a>
                <p className='fixed right-3 top-2 text-lg '>בס״ד</p>
                

            </div>
        </>
    )
}