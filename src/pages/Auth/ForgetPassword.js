import axios from "axios"
import { useState } from "react"
import ReactModal from "react-modal"
import Input from "../../Component/Common/Input"
import { API_URL } from "../../utils/contant"
import isEmpty from "../../utils/isEmpty"
import validateEmail from "../../utils/validate"

const ForgetPassword = ({ isOpen, setIsOpen }) => {
    const customStyles = {
        content: { position: 'relative', inset: '0', backgroundColor: '#FFFFFF', border: 'none', boxShadow: '0 0 20px rgb(0 0 0 / 5%)', borderRadius: '8px', width: '36rem', margin: '0 auto', padding: '0', overflow: 'hidden' }
    }

    const [errors, setErrors] = useState();
    const [loader, setLoader] = useState();
    const [formData, setFormData] = useState({
        email: '',
    });

    const { email } = formData;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({});
    };

    const validate = () => {
        const _errors = {};
        if (isEmpty(email)) {
            _errors.email = 'Please enter email address.';
        }
        else if (!validateEmail(email)) {
            _errors.email = 'It must be a valid email.';
        }
        return _errors;
    }

    const _forgot = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setLoader(true);
            axios.post(`${API_URL}user/forgotpassword`, formData)
                .then(res => {
                    console.log(res);
                    setIsOpen(false);
                    setLoader(false);
                })
                .catch(err => {
                    setErrors({ "err": err?.response?.data?.message });
                    setLoader(false);
                    console.log(err)
                })
        }
        setErrors(errors || {});
    }

    return (
        <>

            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <main className='auth-container max-w-md mx-auto' style={{ boxShadow: 'none' }}>
                    <p className="text-center text-gray-600 mb-36"> Type in your email and we will send you instructions on how to reset your password. </p>
                    {errors?.err && <p className="text-red-700 text-10 mt-4 ml-2 mb-15 w-full flex items-center justify-center "> {errors?.err} </p>}
                    <div className='w-full flex flex-col md:flex-row items-center gap-3 mb-28'>
                        <div className="w-full">
                            <Input
                                name="email"
                                type={'email'}
                                value={email}
                                placeholder='Your Email'
                                handleChange={handleChange}
                                errorMessage={errors?.email}
                            />
                        </div>
                        {loader ?
                            <button className="bg-red-500 w-full md:w-auto text-white whitespace-nowrap px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px">
                                <div className="loader"></div>
                            </button>
                            : <button className="bg-red-500 w-full md:w-auto text-white whitespace-nowrap px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" onClick={() => _forgot()}>Send</button>
                        }
                    </div>
                </main>
            </ReactModal>

        </>
    )
}

export default ForgetPassword;