import { RiArrowRightSLine } from "react-icons/ri";
import { AiFillTag } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

const NFTListings = ({title}) => {
    return (
        <>
            <section className='border rounded-8 my-22 pt-18'>

                <div className='flex items-center justify-between gap-4 pb-18 border-b px-24 cursor-pointer'>
                    <span className='text-16 font-bold flex items-center gap-3 text-gray-900'> <AiFillTag className='text-gray-800' size="18" />{title} </span>
                    <MdKeyboardArrowUp className='text-gray-600 cursor-pointer' size="20" />
                </div>

                <div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="h-44 border-b text-gray-800 text-14">
                                <tr>
                                    <th scope="col" className="pl-24 font-normal">
                                        Price
                                    </th>
                                    <th scope="col" className="font-normal">
                                        USD Price

                                    </th>
                                    <th scope="col" className="font-normal">
                                        Expiration
                                    </th>
                                    <th scope="col" className="pr-24 font-normal">
                                        From
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50 pb-22 h-58 text-gray-800 text-14">
                                    <td scope="row" className="pl-24 h-58 whitespace-nowrap flex gap-2 items-center">
                                        <img className="w-10" src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" />
                                        <span className="font-bold"> 0.00001 </span> WETH
                                    </td>
                                    <td className="">
                                        <RiArrowRightSLine className="float-left mt-4" />
                                        $0.01
                                    </td>
                                    <td className="">
                                        27 days
                                    </td>
                                    <td className="pr-24 text-red-500">
                                        BALEAS
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NFTListings;