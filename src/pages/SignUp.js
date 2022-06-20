import { Link } from 'react-router-dom';
import Input from '../Component/Common/Input'

const SignUp = () => {

    return (
        <>
            <section className='my-99'>

                <main className='auth-container max-w-md mx-auto'>
                <span className="self-center logo text-xl text-red-500 mb-26 w-full font-semibold whitespace-nowrap flex items-center justify-center gap-2">
                        <img className="w-36" src="assets/image/beglobal.svg" alt="" />
                        Titan</span> 
                    <div className='w-full'>
                        <Input placeholder='Username' className='mb-16' />
                        <Input placeholder='Email' className='mb-16' />
                        <Input placeholder='Confirm Email' className='mb-16' />
                        <Input placeholder='Password' className='mb-16' />
                        <Input placeholder='Confirm Password' className='mb-16' />
                    </div>
                    <button className="bg-red-500 text-white w-full mb-18 px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign Up</button>
                    <div className="Divider__container my-28"><span className='text-gray-500 font-medium'>or</span></div>
                    <section className='flex gap-3 justify-center w-full'>
                        <div className='SocialButton w-full transition-all hover:bg-gray-50 rounded-5 mb-16'><img src="/assets/image/google.svg" alt="" /></div>
                        <div className='SocialButton w-full transition-all hover:bg-gray-50 rounded-5 mb-16'><img className='w-28' src="/assets/image/twitter.svg" alt="" /></div>
                        <div className='SocialButton w-full transition-all hover:bg-gray-50 rounded-5 mb-16'><img src="/assets/image/fb.svg" alt="" /></div>
                    </section>

                </main>

                <p className="text-center mt-28"> <span className='text-gray-600'>Already have an account?</span> <Link to="/signin"> <span className='cursor-pointer text-red-600 transition-all hover:text-red-700'> Sign in now.  </span> </Link> </p>

            </section>
        </>
    )
}

export default SignUp;