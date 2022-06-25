import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../Component/Common/Input'
import { API_URL } from '../../utils/contant';
import isEmpty from '../../utils/isEmpty';
import validateEmail from '../../utils/validate';
import ForgetPassword from './ForgetPassword';

const SignIn = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [userData, setUserData] = useState({ email: '', password: '' });
    const { email, password } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setErrors({...errors, [e.target.name]: ''})
    }

    const validate = () => {
        const _errors = {};
        if (isEmpty(email)) {
            _errors.email = 'Please enter email.';
        }
        else if (!validateEmail(email)) {
            _errors.email = 'It must be a valid email.';
        }
        if (isEmpty(password)) {
            _errors.password = 'Please enter password.';
        }
        return _errors;
    }

    const _login = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setLoader(true);
            axios.post(API_URL + 'signin', userData)
                .then(res => {
                    localStorage.setItem('token', res?.data?.token);
                    setLoader(false);
                    history.push('/')
                })
                .catch(err => {
                    setErrors({ "err": err?.response?.data?.message })
                    setLoader(false);
                })
        }
        setErrors(errors || {});
    }

    return (
        <>
            <section className='my-99'>

                <main className='auth-container max-w-md mx-auto'>
                    <span className="self-center logo text-xl text-red-500 mb-26 w-full font-semibold whitespace-nowrap flex items-center justify-center gap-2">
                        <img className="w-36" src="assets/image/beglobal.svg" alt="" />
                        Titan
                    </span>
                    {errors?.err && <p className="text-red-700 text-10 mt-4 ml-2 mb-15 w-full flex items-center justify-center "> {errors?.err} </p>}
                    <div className='w-full'>
                        <Input
                            placeholder='Email'
                            value={email}
                            name='email'
                            type="text"
                            handleChange={handleChange}
                            errorMessage={errors?.email}
                            className='mb-16'
                        />
                        <Input
                            placeholder='Password'
                            value={password}
                            name='password'
                            type="password"
                            handleChange={handleChange}
                            errorMessage={errors?.password}
                            className='mb-16'
                        />
                    </div>
                    {loader ?
                        <button type='button' className="bg-red-500 text-white w-full mb-18 px-32 h-38 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >
                            <div className="loader"></div>
                        </button>
                        : <button type='button' onClick={() => _login()} className="bg-red-500 text-white w-full mb-18 px-32 h-38 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign In</button>
                    }
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" />
                            <p className='text-gray-600'>Remember Me</p>
                        </div>
                        <p onClick={() => setIsOpen(true)} className="cursor-pointer text-red-600 transition-all hover:text-red-700"> Forgot Password? </p>
                    </div>
                    <div className="Divider__container my-28"><span className='text-gray-500 font-medium'>or</span></div>
                    <section className='flex gap-3 justify-center w-full'>
                        <div className='SocialButton w-full transition-all hover:bg-gray-50 rounded-5 mb-16'><img src="/assets/image/google.svg" alt="" /></div>
                        <div className='SocialButton w-full transition-all hover:bg-gray-50 rounded-5 mb-16'><img className='w-28' src="/assets/image/twitter.svg" alt="" /></div>
                        <div className='SocialButton w-full transition-all hover:bg-gray-50 rounded-5 mb-16'><img src="/assets/image/fb.svg" alt="" /></div>
                    </section>
                </main>

                <p className="text-center mt-28"> <span className='text-gray-600'>Don‘t have an account?</span> <Link to="/signup"><span className='cursor-pointer text-red-600 transition-all hover:text-red-700'> Sign up now. </span> </Link>  </p>
            </section>
            <ForgetPassword isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default SignIn;