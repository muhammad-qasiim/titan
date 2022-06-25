import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../../../Component/Admin/Navbar';
import Sidebar from '../../../Component/Admin/Sidebar';
import SimpleTable from '../../../components/common/Table/SimpleTable';
import { API_URL_ADMIN } from '../../../utils/contant';

const MissionList = () => {
    const [loader, setLoader] = useState(true);
    const adminToken = localStorage.getItem('token');
    const [res, setRes] = useState([]);

    useEffect(() => {
        _getList()
    }, [])

    const _getList = () => {
        const headers = {
            Authorization: `Bearer ${adminToken}`,
        };
        axios.get(API_URL_ADMIN + 'admin/missions', { headers: headers })
            .then(res => {
                setLoader(false);
                setRes(res?.data)
            })
            .catch(err => {
                setLoader(false);
            })
    }
    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <section className="w-420">
                    <Sidebar />
                </section>
                <section className="flex flex-col flex-1 items-center justify-center mr-10">
                    <section className="createItemContainer container mx-auto px-24 lg:px-99 mt-28  w-full">
                        <div className="flex items-center justify-between">
                            <h3 className="text-40 font-semibold text-left my-42">Missions</h3>
                            {/* <Link to="/admin/create-mission"> <button className="bg-red-500 text-white px-32 mb-22 py-6 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-red-600 relative top-0 hover:top-px" > Add Mission </button> </Link> */}
                        </div>
                        <hr />
                    </section>
                    <SimpleTable rows={res} loader={loader}/>
                </section>

            </main>
        </>
    )
}

export default MissionList;