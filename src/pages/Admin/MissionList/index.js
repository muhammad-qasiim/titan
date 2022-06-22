import { Link } from 'react-router-dom';
import Navbar from '../../../Component/Admin/Navbar';
import Sidebar from '../../../Component/Admin/Sidebar';

const MissionList = () => {

    return (
        <>
            <Navbar />

            <main className="flex gap-3">

                <section className="w-420">
                    <Sidebar />
                </section>

                <section className="flex flex-col flex-1 items-center justify-center">
                    <section className="createItemContainer container mx-auto px-24 lg:px-99 mt-28 mb-100  w-full">
                        <div className="flex items-center justify-between">
                            <h3 className="text-40 font-semibold text-left my-42">Missions</h3>
                            <Link to="/admin/create-mission"> <button className="bg-red-500 text-white px-32 mb-22 py-6 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-red-600 relative top-0 hover:top-px" > Add Mission </button> </Link>
                        </div>

                        table

                        <hr />
                    </section>
                </section>

            </main>

        </>
    )
}

export default MissionList;