import Input from '../components/common/Input';

const SignIn = () => {

    return (
        <>

            <main className='auth-container max-w-md mx-auto'>
                <h6 className="text-xl font-semibold whitespace-nowrap flex items-center justify-center gap-2 mt-8 mb-34">
                    <img className="w-7" src="/assets/beglobal.svg" alt="" />
                    titan
                </h6>
                <div className='w-full'>
                    <Input
                        placeholder='Email'
                        type={'email'}
                        className='mb-16'
                    />
                    <Input
                        placeholder='Password'
                        type={'password'}
                        className='mb-16'
                    />
                </div>

                <button className="bg-red-500 text-white w-full mb-18 px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px">Sign In</button>
            </main>
        </>
    )
}

export default SignIn;