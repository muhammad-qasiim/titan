import { Link } from 'react-router-dom';
import { BsInfoCircle } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

const Header = () => {

    return (
        <section className="relative">
            <div className="showcase w-full absolute inset-0">
            </div>
            <header className="container mx-auto px-24 lg:px-99 py-99 mb-99">
                <section className="flex flex-col xl:flex-row items-center gap-6">
                    <div className="w-full mb-32 xl:mb-10">
                        <h3 className="text-50 font-semibold mb-10 text-black leading-58">Discover, collect, and sell extraordinary NFTs</h3>
                        <p className="mt-4 text-34 text-gray-700 leading-48 pr-0 lg:pr-112">beglobal is the world's first and largest NFT marketplace</p>
                        <div className="flex items-center gap-4 mt-38">
                            <Link to="/explore">  <button className="bg-primary text-white px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Explore</button> </Link>
                            <Link to="/create">  <button className="border border-red-600 rounded-5 text-primary px-32 py-10 transition-all relative top-0 hover:top-px">
                                Create
                            </button> </Link>
                        </div>
                        <p className="font-medium flex items-center gap-2 cursor-pointer text-red-600 mt-24 transition-all hover:text-red-700 z-50 relative"> <AiFillPlayCircle size="28" /> Learn more about beglobal</p>
                    </div>
                    <div className="w-full md:w-3/5 xl:w-full">
                        <Link to="/collection">
                            <div className="relative my-18 px-14 w-full lg:my-12 lg:px-14">
                                <article className="showcase-header cursor-pointer overflow-hidden rounded-lg shadow-lg">
                                    <section className="relative">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://openseauserdata.com/files/beanz_launch_image_original_updated.png" />
                                    </section>
                                    <footer className='flex items-center justify-between py-22 px-12'>
                                        <section className='flex items-center gap-4'>
                                            <div className=" h-64 w-64 rounded-full  border-4 border-gray-400">
                                                <img alt="Placeholder" className="h-full rounded-full w-full overflow-hidden" src="https://openseauserdata.com/files/otherside_launch_creator_image_rc1.jpeg" />
                                            </div>
                                            <div>
                                                <h6 className="mt-4 text-md leading-relaxed text-gray-800 cursor-pointer font-bold"> Good Monkey  </h6>
                                                <p className="text-14 leading-relaxed text-red-600 font-medium pl-4 mb-6 cursor-pointer transition-all hover:underline"> moondust</p>
                                            </div>
                                        </section>
                                        <BsInfoCircle className='mr-4 text-22 cursor-pointer' />
                                    </footer>
                                </article>
                            </div>
                        </Link>
                    </div>
                </section>
            </header>
        </section>
    )
}

export default Header;