import { BsFileImage, BsAsterisk } from "react-icons/bs";
import Input from '../../../Component/Common/Input';
import Navbar from '../../../Component/Admin/Navbar';
import Footer from '../../../Component/Admin/Footer';

const CreateMission = () => {

    return (
        <>
            <Navbar />

            <section className='mt-99 relative'>
                <img className='absolute -top-10 left-0 hidden lg:block' src="/assets/left-graphic.png" alt="" />
                <section className="container mx-auto px-24 lg:px-99 mt-99 w-full xl:w-2/4">
                    <h3 className="text-40 font-semibold text-left mb-18">Add New Mission</h3>
                </section>
                <img className='absolute -top-10 right-0 hidden lg:block' src="/assets/right-graphic.png" alt="" />
            </section>
            <section className="createItemContainer container mx-auto px-24 lg:px-99 mt-28 mb-100  w-full xl:w-2/4">
                <p className="caption-text mb-16 flex items-start gap-1"><BsAsterisk className="text-8 text-red-600 relative top-1" /> Required fields</p>
                <Input
                    className="mb-22"
                    label="Mission name"
                    type='text'
                    name="name"
                />
                <div className='mb-22'>
                    <label className="text-gray-800 font-medium" htmlFor="#">Mission description</label> <br />
                    <p className='caption-text mt-6 mb-10'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                    <textarea
                        className={`w-full py-18 text-14 px-16 h-176`}
                        placeholder='Provide a detailed description of your item.'
                        name="describtion"
                    >
                    </textarea>
                </div>
                <div className='mb-32'>
                    <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">Mission Cover Image <BsAsterisk className="text-8 text-red-600 relative top-1" /></label>
                    <p className='caption-text mt-6 mb-10'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB </p>
                    <section className={`upload-modal-container cursor-pointer`}>
                        <input
                            id="file-input"
                            className={`absolute inset-0 opacity-0 cursor-pointer`}
                            type="file"
                            accept=" .jpg , .jpeg , .png , .gif, .mp4, .mp3, .mpeg, .mov, video/quicktime"
                        />

                        <BsFileImage className="text-56" style={{ color: 'rgb(179, 179, 179)' }} />
                    </section>
                </div>

                <hr />
                <button className="bg-red-500 text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px"> Add </button>
            </section>

            <Footer />
        </>
    )
}

export default CreateMission;