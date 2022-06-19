import { Link } from 'react-router-dom';
import CollectionItem from './CollectionItem'
import { BsGridFill } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";

const CollectionContainer = () => {
    return (
        <>
            <section className='border rounded-8 my-22 pt-18'>

                <div className='flex items-center gap-4 justify-between pb-18 border-b px-24 cursor-pointer'>
                    <span className='text-16 font-bold flex items-center gap-3 text-gray-900'> <BsGridFill className='text-gray-800' size="20" /> More From This Collection </span>
                    <MdKeyboardArrowUp className='text-gray-600 cursor-pointer' size="20" />
                </div>

                <div className='px-24 bg-gray-50 pt-14 pb-18'>
                    <CollectionItem />
                </div>

                <div className='flex items-center gap-4 justify-center py-18 border-t px-24 cursor-pointer'>
                    <Link to="/collection">  <button className="border border-red-600 font-bold rounded-5 text-red-500 px-32 py-10 transition-all relative top-0 hover:top-px">
                        View collection
                    </button> </Link>
                </div>
            </section>
        </>
    )
}

export default CollectionContainer;