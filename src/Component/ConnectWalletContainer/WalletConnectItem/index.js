import { Link } from 'react-router-dom';

const WalletConnectItem = () => {

    const Collections = ["MetaMask", "Coinbase Wallet", "WalletConnect", "Phantom", "Venly", "Kaikas", "Authereum", "Torus", "Phantom", "Dapper"]

    return (
        <>

            <div className="text-sm text-gray-500  border-gray-200 mb-32">
                <ul className="rounded-8 card-shadow bg-gray-50 w-full mx-auto my-60 border">
                    {
                        Collections?.map(collection => (
                            <Link to="/create_item">
                                <li className="wallet-item flex items-center justify-between px-26 py-16 border-b cursor-pointer">
                                    <div className={` flex justify-between text-gray-700 items-center gap-4 font-normal text-16 cursor-pointer transition-all`}>
                                        <img className="w-24" src="/assets/metamask.webp" alt="" />
                                        {collection}
                                    </div>
                                    {collection === 'MetaMask' && (
                                        <div className="bg-red-500 text-white px-16 py-3 rounded-20">Popular</div>
                                    )}

                                    {collection === 'Phantom' && (
                                        <div className="bg-gray-100 text-gray-700 px-16 py-3 rounded-20">Solana
                                        </div>
                                    )}
                                    {collection === 'Authereum' && (
                                        <div className="bg-gray-100 text-gray-700 px-16 py-3 rounded-20">Solana
                                        </div>)}
                                </li>
                            </Link>

                        ))
                    }
                    <li>
                        <p className={`wallet-item font-medium text-lg cursor-pointer transition-all text-gray-500 px-26 text-center border-b py-10`}>Show more options</p>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default WalletConnectItem;