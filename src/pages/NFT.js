
import CollectionContainer from '../components/NFT_Page/CollectionContainer'
import NFTDetail from '../components/NFT_Page/NFTDetail'
import NFTListings from '../components/NFT_Page/NFTListings'
import { FaWallet } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { IoMdRefresh } from "react-icons/io";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical, BsFillShareFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiFillEye, AiOutlineClockCircle, AiOutlineQuestionCircle } from "react-icons/ai";

const NFT = () => {

    return (
        <>
            <section className="container mx-auto px-24 lg:px-99 pt-32 pb-99 mb-99 w-full lg:w-3/4">
                <div className='flex justify-end mb-16 border-b border-gray-300 pb-18'>
                    <button className="bg-red-500 text-white px-52 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px mt-8 font-bold flex items-center gap-3" > Sell</button>
                </div>

                <main>
                    <section className="flex flex-col xl:flex-row items-start gap-0 xl:gap-6">
                        <div className="w-full xl:w-4/5">

                            {/* mobile only */}
                            <section className='block xl:hidden'>
                                <section className='flex items-center gap-4 justify-between'>
                                    <span className='text-red-500 text-18 flex items-center gap-3'>BEANZ Official <GoVerified className="text-blue-500 text-16" /></span>
                                    <section className="flex justify-center items-center my-8">
                                        <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tl-8 rounded-bl-8 border">
                                            <IoMdRefresh size="18" />
                                        </div>
                                        <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer border">
                                            <BsFillShareFill size="14" />
                                        </div>
                                        <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tr-8 rounded-br-8 border">
                                            <BsThreeDotsVertical />
                                        </div>
                                    </section>
                                </section>
                                <h3 className="text-36 font-semibold mb-2 text-black leading-58">Bean #2409</h3>
                            </section>
                            {/*  */}

                            <div className="relative my-18 w-full lg:my-12">
                                <article className="border cursor-pointer overflow-hidden rounded-lg shadow-lg">
                                    <div className='px-24 py-14 flex items-center gap-4 justify-between'>
                                        <img class="w-3" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="" />
                                        <span className="text-14 text-gray-600 flex items-center gap-2"> <AiOutlineHeart className="transition-all cursor-pointer hover:text-red-600" size="22" /> 14</span>
                                    </div>
                                    <section className="relative">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://lh3.googleusercontent.com/LwWCE4G49qFjE-HBdMNtMQVDYK6MRbv3rGDJt59o1YAj2DXfxJyCu1KIsK76D_nvcnH9ISAw3OAP2iPT571UVs4CERn_LaPTn1D0QQ=w600" />
                                    </section>
                                </article>
                            </div>
                            <NFTDetail />
                        </div>
                        <div className="w-full mt-8 mb-32 xl:mb-10 ml-28">

                            {/* desktop only */}
                            <section className='hidden xl:block'>
                                <section className='md:flex items-center gap-4 justify-between'>
                                    <span className='text-red-500 text-18 flex items-center gap-3'>BEANZ Official <GoVerified className="text-blue-500 text-16" /></span>
                                    <section className="flex justify-center items-center my-8">
                                        <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tl-8 rounded-bl-8 border">
                                            <IoMdRefresh size="18" />
                                        </div>
                                        <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer border">
                                            <BsFillShareFill size="14" />
                                        </div>
                                        <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tr-8 rounded-br-8 border">
                                            <BsThreeDotsVertical />
                                        </div>
                                    </section>
                                </section>
                                <h3 className="text-36 font-semibold mb-2 text-black leading-58">Bean #2409</h3>
                            </section>
                            {/*  */}

                            <section className='flex items-center flex-wrap gap-6 ml-4'>
                                <p className="flex items-center gap-2 font-light text-gray-500 "> Owned by  <span className='text-red-500 transition-all hover:text-red-600 cursor-pointer'>BALEAS</span></p>
                                <p className="flex items-center gap-2 font-light cursor-pointer text-gray-500 transition-all hover:text-gray-900"> <AiFillEye className="text-gray-450" size="26" /> 7.7K views</p>
                                <p className="flex items-center gap-2 font-light cursor-pointer text-gray-500 transition-all hover:text-gray-900"> <AiFillHeart className="text-gray-450" size="24" /> 334 favorites</p>
                            </section>

                            <section className='border rounded-8 my-22 pt-18'>

                                <div className='flex items-center gap-4 justify-between pb-18 border-b px-24'>
                                    <span className='text-15 flex items-center gap-3 text-gray-500'> <AiOutlineClockCircle className='text-gray-500' size="20" /> Sale ends June 5, 2022 at 3:02am GMT+5 </span>
                                    <AiOutlineQuestionCircle className='text-gray-500 cursor-pointer' size="20" />
                                </div>

                                <div className='px-24 bg-gray-50 pt-14 pb-18'>
                                    <span className='text-15 flex items-center gap-3 text-gray-500'>Top bid -- Reserve price not met. </span>
                                    <span className='text-15 flex items-center gap-3 text-gray-500'> <img class="w-14" src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" /> <span className='font-bold text-gray-900 text-32'>3.7</span> ($9,969.35) <BsFillArrowUpRightCircleFill className="cursor-pointer text-gray-500 transition-all hover:text-gray-700" size="24" /> </span>
                                    <button className="bg-red-500 text-white px-52 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px mt-8 font-bold flex items-center gap-3" > <FaWallet size="20" /> Place bid</button>

                                </div>
                            </section>
                            <NFTListings title="Listings" />
                            <NFTListings title="Offers" />
                        </div>
                    </section>
                </main>
                <CollectionContainer />
            </section>
        </>
    )
}

export default NFT;