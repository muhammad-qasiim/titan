
import { useState } from 'react'
import { GoVerified } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { AiOutlineTag, AiOutlineHeart, AiOutlineFormatPainter, AiOutlineUnorderedList } from "react-icons/ai";
import WalletModel from '../../components/common/WalletModel';
import CollectionItem from '../../Component/Common/CollectionItems'
import { useWeb3React } from '@web3-react/core';

function Create() {
    const [activeLink, setActiveLink] = useState('Collected');
    const { account } = useWeb3React();

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }
    const Collections = ["Collected", "Favourited", "Offers Made", "Offers Received", "Active Listings",]

    return (
        <>
            <WalletModel open={open} handleClose={handleClose}/>

            <header className="bg-black bg-center bg-cover w-full"
                style={{ backgroundImage: 'url(assets/image/join_bg_bc.webp)' }}
            >
                <section className="container flex justify-center relative mx-auto px-24 h-224">
                    <div className="absolute w-128 h-128 rounded-full border-4 border-gray-50 -bottom-16 left-8 -translate-x-2/4">
                        <img alt="Placeholder" className="h-full rounded-full w-full overflow-hidden" src="assets/image/ape.jpeg" />
                    </div>
                    <div className="w-full h-224 overflow-hidden">
                        <img alt="Placeholder" className="h-full rounded-full mx-auto bg-contain mt-24 overflow-hidden" src="assets/image/join_bc.webp" />
                    </div>
                </section>
            </header>

            <section className="container mx-auto px-24 lg:px-99 my-72 text-center">
                <h3 className="text-28 font-semibold text-gray-800 text-center mb-18 flex items-center gap-2 justify-center">Titans Club <GoVerified className="text-blue-500 text-22" /> </h3>
                <h5 className="flex items-center gap-2 text-gray-700 justify-center mb-14">Wallet Address:
                    {account ?
                        <span className="text-red-500 cursor-pointer hover:underline transition-all hover:text-red-700">
                            {account}
                        </span>
                        :
                        <span className="text-red-500 cursor-pointer hover:underline transition-all hover:text-red-700" onClick={() => setOpen(true)}>
                            Connect Wallet to profile
                        </span>
                    }
                </h5>
                {/* <h5 className="flex items-center gap-2 text-gray-700 justify-center mb-14">Created by <span className="text-red-500 cursor-pointer transition-all hover:text-red-700"> Billionaireclub_LLC</span> <GoVerified className="text-blue-500 text-14" /> </h5> */}

                {/* <p className="text-18 w-full md:w-2/4 mx-auto font-light" style={{ color: '#707a83' }}>
                    The BILLIONAIRE CLUB is a private collection of 10,000 billionaire apes NFTs - unique digital collectibles. Earlier this year, a mysterious force coming from another galaxy summoned the most influential people on planet Earth to a secret party. Acquiring one of them will give you access to an ever-growing community of investors and entrepreneurs.                    </p> */}
            </section>

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-32 mx-8 overflow-x-scroll">
                <ul className="flex items-center 2xl:justify-center gap-8 whitespace-nowrap">
                    {
                        Collections?.map(collection => (
                            <li onClick={() => setActiveLink(collection)}>
                                <span className={`flex items-center gap-2 relative text-lg border-b-2 border-transparent font-normal cursor-pointer transition-all text-gray-500 hover:text-gray-800 ${activeLink === collection && 'active after:-bottom-2 text-gray-800'}`}>
                                    {collection === 'Collected' && <BsCollection size="16" />}
                                    {collection === 'Offers Received' && <AiOutlineFormatPainter size="20" />}
                                    {collection === 'Favourited' && <AiOutlineHeart size="18" />}
                                    {collection === 'Offers Made' && <AiOutlineUnorderedList size="16" />}
                                    {collection === 'Active Listings' && <AiOutlineTag size="18" />}
                                    {collection}
                                    <span className='text-14'>0</span>
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <section className="container mx-auto px-24 lg:px-99 my-72 text-center">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        Collections?.map(collection => (
                            <CollectionItem />
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Create;
