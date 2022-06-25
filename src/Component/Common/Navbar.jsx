import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import { AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Sidebar from './Sidebar';
import SidebarNav from './SidebarNav';
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiWallet } from "react-icons/bi";
import { useTranslation } from 'react-multi-lang';
import WalletModel from '../../components/common/WalletModel';
import { useWeb3React } from '@web3-react/core';

const Navbar = () => {
    const t = useTranslation()
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleSidebarNav, setToggleSidebarNav] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('login_user'));
    const { account } = useWeb3React();

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }
    const [activeLink, setActiveLink] = useState('Trending');
    const Navigation = [{ placeholder: 'Home', path: '/home' }, { placeholder: 'Events', path: '/events' }, { placeholder: 'Airdrop Challenge', path: '/challenge' },
        // { placeholder: 'Profile', path: '/profile' },
    ]

    return (
        <>
            <WalletModel open={open} handleClose={handleClose}/>
            <nav className="sticky h-71 top-0 bg-white shadow-xl" style={{ zIndex: '999' }}>
                <div className="flex h-71 justify-between items-center mx-auto px-24 lg:px-99">
                    <Link to="/home">
                        <span className="self-center logo text-xl text-red-500 font-semibold whitespace-nowrap flex items-center gap-2">
                            <img className="w-36" src="assets/image/beglobal.svg" alt="" />
                            {t('Titan')}
                        </span>
                    </Link>

                    <div className="flex xl:order-1">
                        <div className="hidden relative mr-3 xl:mr-0 xl:block md:w-424">
                            <Input type="text" placeholder="Search items, collections, and accounts"  />
                        </div>
                        {
                            toggleSearch ? (
                                <>
                                    <div className="relative ml-18 mr-3 xl:mr-0 xl:hidden flex items-center gap-2">
                                        <MdKeyboardArrowLeft onClick={() => setToggleSearch(false)} className='text-gray-500 text-24 cursor-pointer' />
                                        <Input type="text" placeholder="Search items, collections, and accounts" startAdorment={<BiSearch />} />
                                    </div>
                                </>
                            ) : (
                                <>

                                    <button onClick={() => setToggleSearch(true)} type="button" className="inline-flex items-center p-2 ml-14 text-sm text-gray-500 rounded-xl xl:hidden  focus:outline-none focus:text-gray-800" aria-controls="mobile-menu-3" aria-expanded="false">
                                        <BiSearch className='mt-2' size="20" />
                                    </button>
                                </>
                            )
                        }
                        <button onClick={() => setToggleSidebarNav(!toggleSidebarNav)} type="button" className="relative inline-flex items-center p-2 ml-14 text-sm text-gray-500 rounded-xl xl:hidden  focus:outline-none focus:text-gray-800" aria-controls="mobile-menu-3" aria-expanded="false">
                            {toggleSidebarNav ? <VscClose size="24" /> : <AiOutlineMenu size="20" />}
                        </button>
                    </div>

                    <div className="hidden justify-between items-center w-full xl:flex xl:w-auto xl:order-2" id="mobile-menu-3">
                        <ul className="flex flex-col items-center xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium">
                            {
                                Navigation?.map(item => (
                                    <li onClick={() => setActiveLink(item?.placeholder)}>
                                        <Link to={item?.path}>
                                            <span className={`relative text-xl border-b-2 font-normal border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800 ${activeLink === item?.placeholder && 'active text-gray-800 after:-bottom-6'}`}>
                                                {item?.placeholder}
                                            </span>
                                        </Link>
                                    </li>
                                ))
                            }
                            <Link to={userInfo?.token ? '/profile' : "/signin"}>
                                <li onClick={() => setActiveLink('')}>
                                    <span className='relative text-3xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800'>
                                        <CgProfile />
                                    </span>
                                </li>
                            </Link>
                            {account ?
                                <li>
                                    <button className="bg-red-500 w-full md:w-auto text-white whitespace-nowrap px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px">
                                        {account.slice(0, 6)}...
                                    </button>
                                </li> :
                                <li>
                                    <span
                                        // onClick={() => { setToggleSidebar(!toggleSidebar); 
                                        // setActiveLink('') }} 
                                        onClick={() => setOpen(true)}
                                        className='relative text-3xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800'>
                                        <BiWallet />
                                    </span>
                                </li>
                            }
                        </ul>
                    </div>
                    <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
                    <SidebarNav toggleSidebarNav={toggleSidebarNav} setToggleSidebarNav={setToggleSidebarNav} />

                </div>
            </nav>
        </>

    )
}

export default Navbar;