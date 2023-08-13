import { useState , useEffect} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../index.css'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from 'react-icons/md';
import { BiSolidLockAlt } from 'react-icons/bi';
import { GoAlertFill,GoVerified } from 'react-icons/go';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { auth , googleprovider } from "../config/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export default function Login() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [visible , setVisible] = useState(false);
    const [popup , setPopup] = useState(false);

    const handleVisibility = () =>{
        setVisible(prevStat => !prevStat)
    }

    const handleLogin = async (data) => {
        try{
            await signInWithEmailAndPassword (auth,data.email , data.password);
            console.log("logged in succcessgully")
            setPopup(true);
            setTimeout(() => {
                setPopup(false)
            }, 5000);
        }
        catch(err){
            console.log(err.message)
        }
    }


    const signInwGoogle = async () => {
        try {
            await signInWithPopup(auth, googleprovider);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="Form-container" id="login-container">
        <form className="form" id="login-form" onSubmit={handleSubmit(handleLogin)}>
            

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

            <button className="button-submit" type="submit" >Log In</button>
            <p className="p">Doesn't have an account? 
                <Link to="/test">
                    <span className="span">SignIn</span>
                </Link>
            </p>
            <p className="p line">Or</p>

            <div className="flex-row">
                <button className="btn google" onClick={signInwGoogle}>
                    <FcGoogle />Sign In with Google 
                </button>
            </div>

            {popup && (
                <div className="popup">
                    <GoVerified /> <p> Welcome Back!</p>
                </div>
            )}

        </form>
        </div>
    );
}