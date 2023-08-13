import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../index.css'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from 'react-icons/md';
import { BiSolidLockAlt } from 'react-icons/bi';
import { GoAlertFill,GoVerified } from 'react-icons/go';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai';
import { createUserWithEmailAndPassword , signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "../config/Firebase";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export default function Test() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [visible , setVisible] = useState(false);
    const [popup , setPopup] = useState(false);
    const [userName, setUserName] = useState('');

    const handleVisibility = () =>{
        setVisible(prevStat => !prevStat)
    }
    const handleSignIn = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password); 
            
            console.log("Account Created!");
            console.log("Form data:", data);
            setUserName(data.firstName)
            setPopup(true);
            setTimeout(() => {
                setPopup(false)
            }, 5000);
            // await createUserDocument(userCredential, data.firstName, data.lastName);    
        } catch (error) {
            console.log(error.message);
        }
    }
    

    const signInwGoogle = async () =>{
        try{
            await signInWithPopup (auth , googleprovider)
        }catch (err) {
            console.error(err);
        }
    }
    
    return (
        <div className="Form-container">
        <form className="form" onSubmit={handleSubmit(handleSignIn)}>
            <div className="flex-column">
                <label>First Name </label>
            </div>
            <div className="inputForm">
                <span>
                    <AiOutlineUser />
                </span>
                <input {...register("firstName", { required: true })} 
                        aria-invalid={errors.firstName ? "true" : "false"}
                        placeholder="Enter Your First Name"  className="input"
                />
            </div>
                {errors.firstName?.type === 'required'  && <p className="alert"><GoAlertFill /> First Name is required <GoAlertFill /></p>}


            <div className="flex-column">
                <label>Last Name </label>
            </div>
            <div className="inputForm">
                <span>
                    <AiOutlineUser />
                </span>
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                    className="input" placeholder="Enter Your Last Name"
                />
            </div>
            {errors.lastName?.type === 'required'  && <p className="alert"><GoAlertFill /> Last Name is required <GoAlertFill /></p>}

            <div className="flex-column">
                <label>Email </label>
            </div>
            <div className="inputForm">
                <span>
                    <MdAlternateEmail />
                </span>
                <input  type="email"
                    {...register("email", { required: "Email Address is required" })} 
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="Enter Your Email" className="input"
                />
            </div>
            {errors.email?.type === 'required'  && <p className="alert"><GoAlertFill /> Email is required <GoAlertFill /></p>}


            <div className="flex-column">
                <label>Password </label>
            </div>
                <div className="inputForm">
                    <span>
                        <BiSolidLockAlt />
                    </span>
                    <input
                        type={visible? "text" : "password"}
                        {...register("password", { required: "Password is required" })}
                        aria-invalid={errors.password ? "true" : "false"}
                        placeholder="Enter Your Password"
                        className="input"
                    />
                    <span className="Eye" onClick={handleVisibility}>
                        {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }
                    </span>
            </div>
            {errors.password?.type === 'required'  && <p className="alert"><GoAlertFill /> Password is required <GoAlertFill /></p>}

            <button className="button-submit" type="submit">Sign In</button>

            <p className="p">Already have an account? 
                <Link to='/login'>
                    <span className="span">Login</span>
                </Link>
            </p>
            <p className="p line">Or</p>

            <div className="flex-row">
                <button className="btn google" onClick={signInwGoogle}>
                <FcGoogle /> Sign In with Google 
                </button>
            </div>

        </form>
            {popup && (
                <div className="popup">
                    <GoVerified /> <p> Welcome, {userName}! You have successfully signed up</p>
                </div>
            )}
        </div>
    );
}