import React, { useState } from 'react';

import validation from './validation';

export default function Login({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event) {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, setErrors);
  }

  function submitHandler(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className='h-[900px] flex justify-center flex-col ' >
      <form onSubmit={submitHandler} className="flex flex-col items-center bg-f7f7f7 border border-gray-300 rounded p-6 my-6  w-[450px] " >
        <div className="flex flex-col w-96 h-24 mb-6">
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className={`border-2 p-2 rounded ${errors.email ? 'border-red-500 bg-red-200' : 'border-green-500 bg-green-200'
              }`}
          />
          <span className={errors.email ? 'text-red-500' : 'text-green-500'}>{errors.email}</span>
        </div>

        <div className="flex flex-col w-96 h-24 mb-6">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={`border-2 p-2 rounded ${errors.password ? 'border-red-500 bg-red-200' : 'border-green-500 bg-green-200'
              }`}
          />
          <span className={errors.password ? 'text-red-500' : 'text-green-500'}>{errors.password}</span>
        </div>

        <button
          className=" border-2 border-black bg-black text-white p-2 rounded hover:border-green-500 hover:text-green-500"
          type="submit"
        >
          Login ProtAh
        </button>
      </form>
    </div>
  );
}
