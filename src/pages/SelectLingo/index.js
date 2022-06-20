import { Link } from 'react-router-dom';
import Header from '../../Component/Common/Header'

const SelectLingo = () => {

    return (
        <>
            <Header />
            <main className='bg-gray-100'>
                <section className="container mx-auto px-24 lg:px-99 py-99">
                    <h3 className="text-28 px-14 font-medium text-gray-800 mb-62">Select your language</h3>

                    <section className="flex flex-col xl:flex-row gap-6 overflow-hidden pb-62">
                        <div className="w-full md:w-3/5 xl:w-full">
                                <article className="showcase-header cursor-pointer h-full overflow-hidden rounded-lg">
                                   <Link to="/home"> <img alt="Placeholder" className="block object-cover w-full h-full" src="assets/image/flags/britian.png" /> </Link>
                                </article>
                        </div>
                        <div className="w-full md:w-3/5 xl:w-full">
                                <article className="showcase-header cursor-pointer h-full overflow-hidden rounded-lg">
                                <Link to="/home"> <img alt="Placeholder" className="block object-cover w-full h-full" src="assets/image/flags/thailand.png" /> </Link>
                                </article>
                        </div>
                    </section>
                </section>
            </main>

        </>
    )
}

export default SelectLingo;