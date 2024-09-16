import React, { useState } from 'react';
import Bg from '../../bg.avif';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasswordValidation = () => {
    if (password === cpassword) {
      setError('');
      return true;
    } else {
      setError('Passwords must match');
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (handlePasswordValidation()) {
      setSuccess('Registration successful');
      // Here you can handle further actions, e.g., sending data to the server
    }
  };

  return (
    <div
      className='relative min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className='backdrop-blur-3xl bg-opacity-90  text-gray-300 shadow-lg rounded-lg p-10 w-full max-w-md' data-aos="flip-down"data-aos-duration="3000" >
        <h1 className='text-4xl font-bold text-center mb-6'>Register</h1>
        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
        {success && <p className='text-green-500 text-center mb-4'>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='username' className='block text-lg font-semibold mb-2'>Username</label>
            <input
              type='text'
              id='username'
              placeholder='Enter your username'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-lg font-semibold mb-2'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='cpassword' className='block text-lg font-semibold mb-2'>Confirm Password</label>
            <input
              type='password'
              id='cpassword'
              placeholder='Confirm your password'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200'
            >
              Submit
            </button>
          </div>
          <div className='flex justify-center mt-4'>
            <a href="./" className=' hover:underline'>Already Have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
