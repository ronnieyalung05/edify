import {useState} from 'react'
import styles from './sign-up.module.css'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => { // e == event object
        e.preventDefault();
    }

    return (
        <>
            <div>
                <form onSubmit = {handleSignUp}>

                </form>

            </div>
        </>
    );
}

export default SignUp