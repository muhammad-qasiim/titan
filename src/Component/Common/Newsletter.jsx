import Input from "./Input"
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaDiscord, FaRedditAlien, FaTiktok } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Newsletter = () => {

    const communitylinks = [<BsTwitter />, <BsInstagram />, <FaDiscord />, <FaRedditAlien />, <BsYoutube />, <FaTiktok />, <IoMail />]

    return (
        <>
            <section className="bg-gray-800">

                <section className="container mx-auto px-24 lg:px-99 pt-60 pb-60 xl:pb-0">
                    <section className="w-full flex flex-col xl:flex-row gap-5 xl:gap-24 border-b border-gray-500">
                    <section className="w-full text-center xl:text-left mb-44">
                        <h4 className="font-semibold text-white text-24 mb-8 ">Stay in the loop</h4>
                        <p className="text-16 text-gray-200 mb-28">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Titan.</p>
                        <div className="w-full flex items-center gap-3">
                            <Input className="w-full" placeholder="Your email address" />
                            <button className="bg-red-500 flex-shrink-0 text-white px-32 py-10 font-semibold rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign up</button>
                        </div>
                    </section>

                    <section className="w-full text-center xl:text-left">
                        <h4 className="font-semibold text-white text-24 mb-8 ">Join the community</h4>
                        <p className="text-16 text-gray-200 mb-28">Join our social media handles to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Titan.</p>
                        <section className="flex items-start justify-center xl:justify-start gap-3 flex-wrap">
                            {
                                communitylinks?.map(link => (
                                    <div className="grid place-content-center cursor-pointer bg-gray-600 transition-all hover:bg-gray-900 hover:text-red-500 text-24 w-48 h-48 rounded-5">
                                        {link}
                                    </div>
                                ))
                            }

                        </section>
                    </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Newsletter;