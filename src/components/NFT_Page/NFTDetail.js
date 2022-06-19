import { FaAlignLeft } from "react-icons/fa";
import { RiScanFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";

const NFTDetail = () => {
    return (
        <>

            <section className='border rounded-8 my-22 pt-18'>

                <div className='flex items-center gap-4 pb-18 border-b px-24 cursor-pointer'>
                    <span className='text-16 font-bold flex items-center gap-3 text-gray-900'> <FaAlignLeft className='text-gray-800' size="18" />Description </span>
                </div>

                <div className='px-24 bg-gray-50 pt-14 pb-18'>
                    <span className='text-gray-500 font-light text-16 flex items-center gap-2'> Created by <span className='text-red-500'>TeamAzuki</span> <GoVerified className="text-blue-500 text-16" /></span>
                </div>

                <div className='flex items-center gap-4 justify-between py-18 border-t border-b px-24 cursor-pointer'>
                    <span className='text-16 font-bold flex items-center gap-3 text-gray-900'> <FaAlignLeft className='text-gray-800' size="18" />About BEANZ Official </span>
                    <MdKeyboardArrowUp className='text-gray-600 cursor-pointer' size="20" />
                </div>

                <div className='px-24 bg-gray-50 pt-14 pb-18'>
                    <span className="text-gray-700 text-14">
                        <img alt="Placeholder" className="w-99 h-99 rounded-8 mr-14 mb-0 float-left" src="https://lh3.googleusercontent.com/LwWCE4G49qFjE-HBdMNtMQVDYK6MRbv3rGDJt59o1YAj2DXfxJyCu1KIsK76D_nvcnH9ISAw3OAP2iPT571UVs4CERn_LaPTn1D0QQ=w600" />

                        BEANZ are a small species that sprouts from the dirt in the garden. They're earnestly driven by the desire to help. However, certain BEANZ feel a calling to pave their own path...
                    </span>
                    <section className="flex items-center mt-18 ">
                        <div className="grid place-items-center bg-white custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tl-8 rounded-bl-8 border">
                            <BsTwitter size="18" />
                        </div>
                        <div className="grid place-items-center bg-white custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer border">
                            <RiScanFill size="14" />
                        </div>
                        <div className="grid place-items-center bg-white custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tr-8 rounded-br-8 border">
                            <BsThreeDotsVertical />
                        </div>
                    </section>
                </div>

                <div className='flex items-center justify-between gap-4 py-18 border-t border-b px-24 cursor-pointer'>
                    <span className='text-16 font-bold flex items-center gap-3 text-gray-900'> <FaAlignLeft className='text-gray-800' size="18" />Details </span>
                    <MdKeyboardArrowUp className='text-gray-600 cursor-pointer' size="20" />
                </div>

                <div className='px-24 bg-gray-50 pt-14 pb-18'>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Contract Address<span className='text-red-500 transition-all hover:text-red-600'>0x306b...f949</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Token ID<span className='text-red-500 transition-all hover:text-red-600'>2409</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Token Standard<span className='text-gray-600'>ERC-721</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Blockchain<span className='text-gray-600'>Ethereum</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Creator Fees<span className='gray-red-600'>5%</span></span>
                </div>

            </section>
        </>
    )
}

export default NFTDetail;