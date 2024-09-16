import React, { useState } from 'react';
import Bg from '../../bg.avif';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic validation
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }

    // Clear the error if validation passes
    setError('');

    // Handle successful submission (e.g., API call)
    console.log('Form submitted with:', { username, password });
  };

  return (
    <div 
      className='relative min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div 
        className='backdrop-blur-3xl bg-opacity-90 text-gray-300 shadow-lg rounded-lg p-10 w-full max-w-md'
        data-aos="flip-up" 
        data-aos-duration="3000"
      >
        <h1 className='text-4xl font-bold text-center mb-6'>Login</h1>
        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='username' className='block text-lg font-semibold mb-2'>Username</label>
            <input 
              type='text' 
              id='username' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password' 
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            <a href="./register" className='p-2 text-blue-500 hover:underline'>Don't Have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
