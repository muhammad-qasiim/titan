
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="bg-gray-800">

            <section className="container mx-auto px-24 lg:px-99 py-60">

                <div className="md:flex md:justify-between border-b pb-42 border-gray-500">
                    <div className="md:mb-0 w-auto md:w-2/6 mb-24">
                        <Link to="/">
                            <h6 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                                <img className="w-7" src="/assets/beglobal.svg" alt="" />
                                beglobal</h6>
                        </Link>
                        <span className="text-gray-400">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3">
                        <div className="mb-24">
                            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white mb-8">Marketplace</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Solana NFTs</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Collectibles</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Domain Names</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-24">
                            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white mb-8">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Help Center</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Platform Status</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-24">
                            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white mb-8">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Privacy Policy</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Terms &amp; Conditions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-24 lg:px-99 pt-16 pb-42 md:flex md:items-center text-center md:justify-between">
                <span className="text-sm text-gray-400 sm:text-center ml-8">© 2022 META Factory™ All Rights Reserved.</span>
                <div className="flex mt-4 space-x-6 justify-center md:mt-0">
                    <span className="cursor-pointer text-gray-400 text-14 hover:underline transition-all">Privacy Policy</span>
                    <span className="cursor-pointer text-gray-400 text-14 hover:underline transition-all">Terms of Service</span>
                </div>
            </section>
        </footer>
    )
}

export default Footer;