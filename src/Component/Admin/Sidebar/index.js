import { Link } from 'react-router-dom';
import { HiLogout } from "react-icons/hi";

const Sidebar = () => {
    const Navigation = [{ placeholder: 'Events', path: '/admin/events' }, { placeholder: 'Missions', path: '/admin/missions' },]

    return (
        <aside className='sidebar-open right-unset left-0 flex justify-between flex-col'
        style={{zIndex: '10'}}
        >

            <ul className="flex pt-40 flex-col items-center mt-4 ">
                {
                    Navigation?.map(item => (
                        <li className='mb-12'>
                            <Link to={item?.path}>
                                <span className='relative text-xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-red-600'>
                                    {item?.placeholder}
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <section className='gGngoX'
            style={{height: '100px'}}
            >
                <button className="bg-red-500 text-white px-32 mb-22 w-full py-10 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-red-600 relative top-0 hover:top-px" > Sign out  <HiLogout className='text-18' /></button>
            </section>
        </aside>
    )
}

export default Sidebar;