import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../Component/Common/Input'
import { API_URL } from '../../utils/contant';
import isEmpty from '../../utils/isEmpty';
import validateEmail from '../../utils/validate';

const SignUp = () => {
    const [userData, setUserData] = useState({ username: '', email: '', password: '', confirmEmail: '', confirmPassword: '', verificationCode: '' });
    const { username, password, email, confirmEmail, confirmPassword, verificationCode } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const history = useHistory();
    const [verification, setVerification] = useState(false);

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setErrors({...errors, [e.target.name]: ''})
    }

    const validate = () => {
        const _errors = {};
        if (verification) {
            if (isEmpty(email)) {
                _errors.email = 'Please enter email.';
            }
            else if (!validateEmail(email)) {
                _errors.email = 'It must be a valid email.';
            }
        } else {
            if (isEmpty(email)) {
                _errors.email = 'Please enter email.';
            }
            else if (!validateEmail(email)) {
                _errors.email = 'It must be a valid email.';
            }
            if (isEmpty(confirmEmail)) {
                _errors.confirmEmail = 'Please enter confirm email.';
            }
            else if (!validateEmail(confirmEmail)) {
                _errors.confirmEmail = 'It must be a valid confirm email.';
            }
            else if (email !== confirmEmail) {
                _errors.confirmPassword = 'Email and confirm email not same!';
            }
            if (isEmpty(username)) {
                _errors.username = 'Please enter username.';
            }
            if (isEmpty(verificationCode)) {
                _errors.verificationCode = 'Please enter verification code.';
            }
            if (isEmpty(password)) {
                _errors.password = 'Please enter password.';
            }
            if (isEmpty(confirmPassword)) {
                _errors.confirmPassword = 'Please enter confirm password.';
            }
            else if (password !== confirmPassword) {
                _errors.confirmPassword = 'Password and confirm password not same!';
            }
        }
        return _errors;
    }

    const _signup = () => {
        const errors = validate();
        const userInfo = {
            'email': email,
            'username': username,
            'password': password,
            'verificationCode': verificationCode
        }
        if (isEmpty(errors)) {
            setLoader(true);
            axios.post(API_URL + 'signup', userInfo)
                .then(res => {
                    setLoader(false);
                    history.push('/signin')
                    setVerification(true);
                })
                .catch(err => {
                    console.log("lo", err)
                    setErrors({ "err": err?.response?.data?.Message ? err?.response?.data?.Message : err?.response?.data?.message })
                    setLoader(false);
                })
        }
        setErrors(errors || {});
    }

    const _sendCode = () => {
        const errors = validate();
        const userInfo = {
            'email': email
        }
        if (isEmpty(errors)) {
            setLoader(true);
            axios.post(API_URL + 'signup/sendotp', userInfo)
                .then(res => {
                    setLoader(false);
                    setVerification(false)
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
                        {verification ?
                            <Input
                                value={email}
                                name='email'
                                type="email"
                                handleChange={handleChange}
                                errorMessage={errors?.email}
                                placeholder='Email'
                                className='mb-16'
                            /> :
                            <>
                                <Input
                                    placeholder='Username'
                                    value={username}
                                    name='username'
                                    type="text"
                                    handleChange={handleChange}
                                    errorMessage={errors?.username}
                                    className='mb-16'
                                />
                                <Input
                                    value={email}
                                    name='email'
                                    type="email"
                                    handleChange={handleChange}
                                    errorMessage={errors?.email}
                                    placeholder='Email'
                                    className='mb-16'
                                />
                                <Input
                                    value={confirmEmail}
                                    name='confirmEmail'
                                    type="email"
                                    handleChange={handleChange}
                                    errorMessage={errors?.confirmEmail}
                                    placeholder='Confirm Email'
                                    className='mb-16'
                                />
                                <Input
                                    value={verificationCode}
                                    name='verificationCode'
                                    type="text"
                                    handleChange={handleChange}
                                    errorMessage={errors?.verificationCode}
                                    placeholder='Verification Code'
                                    className='mb-16'
                                />
                                <Input
                                    name="password"
                                    value={password}
                                    type="password"
                                    placeholder="Password"
                                    handleChange={handleChange}
                                    errorMessage={errors.password}
                                    className='mb-16'
                                />
                                <Input
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    type="password"
                                    placeholder='Confirm Password'
                                    handleChange={handleChange}
                                    errorMessage={errors.confirmPassword}
                                    className='mb-16'
                                />
                            </>
                        }

                    </div>
                    {loader ?
                        <button className="bg-red-500 text-white w-full mb-18 px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px">
                            <div className="loader"></div>
                        </button>
                        :
                        <button onClick={() => verification ? _sendCode() : _signup()} className="bg-red-500 text-white w-full mb-18 px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px">
                            {verification ?
                                "Send Code" : "Sign Up"
                            }
                        </button>
                    }
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