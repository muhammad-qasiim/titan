
import ReactPlayer from 'react-player'
import Header from '../../Component/Common/Header';
import Slider from '../../Component/Common/Slider'

function Create() {

    return (
        <>
            <Header />

            <Slider />

            <section className="container mx-auto px-30 md:px-62 py-52 mb-54">
                <main className='flex flex-col items-center lg:flex-row gap-5 lg:gap-9 justify-between'>
                    <div className="w-full">
                        <ReactPlayer url='https://www.youtube.com/watch?v=Wk7QpuWVpNQ' />
                    </div>
                    <div className="w-full">
                        <h3 className="font-semibold text-24 lg:text-28 mb-10 text-black leading-58">Discover, collect, and sell extraordinary NFTs</h3>
                        <p className="mt-4 text-16 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque cum. Debitis nihil unde, molestiae fugiat sapiente corrupti officia itaque.                        </p>
                    </div>
                </main>
            </section>

            <main className='bg-white'>
                <section className="container mx-auto px-30 md:px-62 py-52 mb-54">
                    <main className='flex flex-col items-center lg:flex-row gap-5 lg:gap-9 justify-around'>
                        <div className="w-full">
                            <img className='mx-auto' src="/assets/image/leoi.png" alt="" />
                        </div>
                        <div className="w-full">
                            <img src="/assets/image/king.png" alt="" />
                        </div>
                    </main>
                </section>
            </main>


        </>
    );
}

export default Create;
