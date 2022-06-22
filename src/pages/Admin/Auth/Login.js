import { useState } from 'react';
import Input from '../../../Component/Common/Input';
import isEmpty from '../../../utils/isEmpty';

const AdminSignIn = () => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const { username, password } = userData;
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const validate = () => {
        const _errors = {};
        if (isEmpty(username)) {
            _errors.username = 'Please enter username.';
        }
        if (isEmpty(password)) {
            _errors.password = 'Please enter password.';
        }
        return _errors;
    }

    const _login = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            // login(userData);
        }
        setErrors(errors || {});
    }

    return (
        <>
            <main className='grid place-content-center' style={{ height: '100vh' }}>
                <main className='auth-container w-full sm:w-384 mx-auto'>
                    <span className="self-center logo text-xl text-red-500 mb-26 w-full font-semibold whitespace-nowrap flex items-center justify-center gap-2">
                        <img className="w-36" src="/assets/image/beglobal.svg" alt="" />
                        Admin Titan
                    </span>
                    <div className='w-full'>
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
                            placeholder='Password'
                            value={password}
                            name='password'
                            type="password"
                            handleChange={handleChange}
                            errorMessage={errors?.password}
                            className='mb-16'
                        />
                    </div>
                    <button type='button' onClick={() => _login()} className="bg-red-500 text-white w-full mb-18 px-32 h-38 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign In</button>
                </main>
            </main>

        </>
    )
}

export default AdminSignIn;