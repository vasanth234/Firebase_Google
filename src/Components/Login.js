import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import SignWith from './signWith';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully');
            window.location.href='/profile'
            toast.success('User logged in successfully', {
                position: 'top-center',
            });
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: 'bottom-center',
            });
        }
    };

    return (
        <div className='log-container'>
          <div className='log-box'>
            <form onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className="forgot-password text-right">
  <a href="/forgot-password">Forgot Password?</a>
</p>
                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
                <p className="forgot-password text-right">New user? <a href="/register">Register Here</a></p>
                <SignWith/>
            </form>
            </div>
        </div>
    );
};

export default Login;
