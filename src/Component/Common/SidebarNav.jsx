import { useState } from 'react';
import Sidebar from './Sidebar';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { BsDiscord, BsSignal } from "react-icons/bs";

const SidebarNav = ({ toggleSidebarNav, setToggleSidebarNav }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const Navigation = [{ placeholder: 'Home', path: '/home' }, { placeholder: 'Events', path: '/events' }, { placeholder: 'Airdrop Challenge', path: '/challenge' }, { placeholder: 'Profile', path: '/profile' },]

    return (
        <>
            <main className={`fixed bottom-0 right-0 left-0 z-10 transition-all ${toggleSidebarNav ? 'sidebar-container' : 'bg-transparent pointer-events-none'}`} style={{ marginLeft: '0px', top: '4.4rem' }}>
                <aside className={`${toggleSidebarNav ? 'sidebar-open' : 'sidebar-close'} flex justify-between flex-col`}>

                    <ul className="flex pt-40 flex-col items-center mt-4 ">
                        <Link className='mb-22' to="/signin">
                            <li onClick={() => setToggleSidebarNav(false)}>
                                <span className='relative flex justify-center items-center text-3xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800'>
                                    <CgProfile />
                                </span>
                            </li>
                        </Link>
                        {
                            Navigation?.map(item => (
                                <li className='mb-12' onClick={() => setToggleSidebarNav(false)}>
                                    <Link to={item?.path}>
                                        <span className={`relative text-xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800`}>
                                            {item?.placeholder}
                                        </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <section className='gGngoX'>
                        <button onClick={() => setToggleSidebar(true)} className="bg-red-500 text-white px-32 mb-22 w-full py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Connect wallet</button>

                        <div className='gGngoXline py-18'>
                            <div className='flex justify-center items-center gap-3 text-26 text-gray-500'>
                                <AiFillFacebook className='transition-all hover:text-gray-800 cursor-pointer' />
                                <AiFillTwitterSquare className='transition-all hover:text-gray-800 cursor-pointer' />
                                <AiFillInstagram className='transition-all hover:text-gray-800 cursor-pointer' />
                                <BsDiscord className='text-22 transition-all hover:text-gray-800 cursor-pointer' />
                                <BsSignal className='text-22 transition-all hover:text-gray-800 cursor-pointer' />
                            </div>
                        </div>
                    </section>
                </aside>
            </main>
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
        </>
    )
}

export default SidebarNav;
