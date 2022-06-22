import React, { useState } from 'react';
import { BsFileImage, BsAsterisk } from "react-icons/bs";
import Input from '../../../Component/Common/Input';
import Navbar from '../../../Component/Admin/Navbar';
import Sidebar from '../../../Component/Admin/Sidebar';
import Footer from '../../../Component/Admin/Footer';

const CreateEvent = () => {

    return (
        <>
            <Navbar />

            <main className="flex gap-3">

                <section className="w-420">
                    <Sidebar />
                </section>

                <section className="flex flex-col flex-1 items-center justify-center">
                    <section className="w-full createItemContainer container mx-auto px-24 lg:px-99 mt-28 mb-100">
                        <h3 className="text-40 font-semibold text-left my-99">Add New Event</h3>
                        <p className="caption-text mb-16 flex items-start gap-1"><BsAsterisk className="text-8 text-red-600 relative top-1" /> Required fields</p>
                        <Input
                            className="mb-22"
                            label="Event name"
                            type='text'
                            name="name"
                        />
                        <div className='mb-22'>
                            <label className="text-gray-800 font-medium" htmlFor="#">Event description</label> <br />
                            <p className='caption-text mt-6 mb-10'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                            <textarea
                                className={`w-full py-18 text-14 px-16 h-176`}
                                placeholder='Provide a detailed description of your item.'
                                name="describtion"
                            >
                            </textarea>
                        </div>
                        <div className='mb-32'>
                            <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">Event Cover Image <BsAsterisk className="text-8 text-red-600 relative top-1" /></label>
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

                        <div className='flex items-center gap-3 mb-18'>
                            <Input
                                className="mb-22"
                                label="Event start date"
                                type='date'
                                name="name"
                            />
                            <Input
                                className="mb-22"
                                type='time'
                                label='Event start time'
                                name="name"
                            />
                        </div>

                        <div className='flex items-center gap-3 mb-18'>
                            <Input
                                className="mb-22"
                                label="Event end date"
                                type='date'
                                name="name"
                            />
                            <Input
                                className="mb-22"
                                type='time'
                                label='Event end time'
                                name="name"
                            />
                        </div>

                        <hr />
                        <button className="bg-red-500 text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px"> Add </button>
                    </section>
                </section>
            </main>

        </>
    )
}

export default CreateEvent;