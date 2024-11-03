import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from './firebase'; // Import the 'auth' instance from your Firebase configuration
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignWith = () => {
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider).then(async(result)=>{
                console.log(result);
                if(result.user){
                    toast.success('user logged in successfully',{
                       postion:'top-center'
                    })
                }
                window.location.href='/profile'
            })
            // Sign-in successful
            console.log("Sign-in successful");
        } catch (error) {
            // Handle errors
            console.error("Error signing in with Google:", error);
        }
    }

    return (
        <div>
            <p className='continue-p'>--or continue with</p>
            <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={signInWithGoogle}>
                <img src={require('../google.png').default} className='imagesign' alt='Sign with Google' width={'60%'} />
            </div>
        </div>
    );
};

export default SignWith;
