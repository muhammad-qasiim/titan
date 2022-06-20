import { useState } from 'react'
import { BsFileImage, BsAsterisk, BsInfoCircle, BsFillUnlockFill } from "react-icons/bs";
import { GoAlert } from "react-icons/go";
import Input from '../../Component/Common/Input'

const CreateProfile = () => {

    const [toggleSwitch1, setToggleSwitch1] = useState(false)
    const [toggleSwitch2, setToggleSwitch2] = useState(false)

    return (
        <>
            <section className='mt-99 relative'>
                <section className="container mx-auto px-24 lg:px-99 mt-99 w-full xl:w-2/4">
                    <h3 className="text-40 font-semibold text-left mb-18">Create New Item</h3>
                </section>
            </section>

            <section className="createItemContainer container mx-auto px-24 lg:px-99 mt-28 mb-100  w-full xl:w-2/4">
                <p className="caption-text mb-16 flex items-start gap-1"><BsAsterisk className="text-8 text-red-600 relative top-1" /> Required fields</p>

                <div className='mb-32'>
                    <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">Image, Video, Audio, or 3D Model <BsAsterisk className="text-8 text-red-600 relative top-1" /></label>
                    <p className='caption-text mt-6 mb-10'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB </p>
                    <section className='upload-modal-container cursor-pointer'>
                        <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                        <BsFileImage className="text-56" style={{ color: 'rgb(179, 179, 179)' }} />
                    </section>
                </div>

                <Input className="mb-22" label="Name" required lab placeholder="Item name" />

                <div className='mb-32'>
                    <label className="text-gray-800 font-medium" htmlFor="#">External link</label> <br />
                    <p className='caption-text mt-6 mb-10'>beglobal will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                    <Input className="w-full" placeholder="https://yoursite.io/item/123" />
                </div>

                <div className='mb-22'>
                    <label className="text-gray-800 font-medium" htmlFor="#">Description</label> <br />
                    <p className='caption-text mt-6 mb-10'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                    <textarea className='w-full py-18 text-14 px-16 h-176' placeholder='Provide a detailed description of your item.'></textarea>
                </div>

                <div className='my-28 border-t pt-28 mt-22'>
                    <label className="text-gray-800 font-medium flex items-center gap-3"> <BsFillUnlockFill className="text-red-500" /> Unlockable Content</label>
                    <div className="flex items-center justify-between gap-4">
                        <p className='caption-text pl-28 mt-6 mb-0 flex items-center gap-2'>Include unlockable content that can only be revealed by the owner of the item. <BsInfoCircle className="cursor-pointer" /></p>
                        <button
                            onClick={() => setToggleSwitch1(!toggleSwitch1)}
                            className={`sc-bXTejn dPeBEV ${toggleSwitch1 && "FeYJf"}`}
                        >
                            <div className="sc-gsNilK eThVUo"></div>
                        </button>
                    </div>
                </div>

                <div className='my-28 border-t border-b py-28 mt-22'>
                    <label className="text-gray-800 font-medium flex items-center gap-3"> <GoAlert /> Explicit & Sensitive Content</label>
                    <div className="flex items-center justify-between gap-4">
                        <p className='caption-text pl-28 mt-6 mb-0 flex items-center gap-2'>Set this item as explicit and sensitive contentinfo <BsInfoCircle className="cursor-pointer" /></p>
                        <button
                            onClick={() => setToggleSwitch2(!toggleSwitch2)}
                            className={`sc-bXTejn dPeBEV ${toggleSwitch2 && "FeYJf"}`}
                        >
                            <div className="sc-gsNilK eThVUo"></div>
                        </button>
                    </div>
                </div>

                <div className='mb-22'>
                    <label className="text-gray-800 font-medium" htmlFor="#">Supply</label> <br />
                    <p className='caption-text mt-6 mb-10 flex items-center gap-2'>The number of items that can be minted. No gas cost to you! <BsInfoCircle className="cursor-pointer" /></p>
                    <Input className="w-full" value="1" />
                </div>

                <hr />

                <button className="bg-red-500 text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Create </button>

            </section>
        </>

    )
}

export default CreateProfile;