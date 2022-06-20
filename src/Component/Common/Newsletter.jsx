import Input from "./Input"
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaDiscord, FaRedditAlien, FaTiktok } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Newsletter = () => {

    const communitylinks = [<BsTwitter />, <BsInstagram />, <FaDiscord />, <FaRedditAlien />, <BsYoutube />, <FaTiktok />, <IoMail />]

    return (
        <>
            <section className="bg-gray-800">

                <section className="container mx-auto px-24 lg:px-99 py-60 border-b border-gray-500">
                    <section className="text-center mb-44">
                        <h4 className="font-semibold text-24 mb-8 ">Stay in the loop</h4>
                        <p className="mb-12 text-16">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
                        <div className="w-full flex items-center gap-3">
                            <Input className="w-full" placeholder="Your email address" />
                            <button className="bg-red-500 flex-shrink-0 text-white px-32 py-10 font-semibold rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign up</button>
                        </div>
                    </section>

                    <section className="text-center">
                        <h4 className="font-semibold text-24 mb-8 ">Join the community</h4>
                        <section className="flex items-start justify-center gap-3 flex-wrap">
                            {
                                communitylinks?.map(link => (
                                    <div className="grid place-content-center cursor-pointer bg-gray-700 transition-all hover:bg-gray-800 hover:text-red-500 text-24 w-48 h-48 rounded-5">
                                        {link}
                                    </div>
                                ))
                            }

                        </section>
                    </section>

                </section>
            </section>
        </>
    )
}

export default Newsletter;