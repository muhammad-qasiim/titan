import React from "react";
import Navbar from '../../../Component/Admin/Navbar';
import Sidebar from '../../../Component/Admin/Sidebar';
import Footer from '../../../Component/Admin/Footer';

const Dashboard = () => {
    return (
        <>
            <Navbar />


            <main className="flex gap-3">

                <section className="w-420">
                    <Sidebar />
                </section>

                <section className="flex flex-col flex-1 items-center justify-center">
                    <h1 className="font-bold text-56">Dashboard</h1>
                </section>

            </main>
        </>
    )
}

export default Dashboard