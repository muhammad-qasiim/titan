import WalletConnectItem from './WalletConnectItem'

const ConnectWalletContainer = () => {

    return (
        <>
            <section className='mt-99 relative'>
                <img className='absolute -top-10 left-0 hidden lg:block' src="/assets/left-graphic.png" alt="" />
                <h3 className="text-40 font-semibold text-center mb-22">Connect your wallet.</h3>
                <img className='absolute -top-10 right-0 hidden lg:block' src="/assets/right-graphic.png" alt="" />
            </section>

            <section className="container mx-auto px-24 lg:px-99 mb-99">

                <p className="mt-4 text-lg leading-relaxed text-gray-600 text-center">
                    Connect with one of our available <span className="text-red-600 cursor-pointer transition-all font-semibold"> wallet </span> providers or create a new one.
                </p>
                <section className='md:w-424 mx-auto'>
                    <WalletConnectItem />
                </section>
            </section>
        </>
    )
}

export default ConnectWalletContainer;