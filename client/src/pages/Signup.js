import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import { ADD_BUYER, ADD_SELLER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addBuyer] = useMutation(ADD_BUYER);
  const [addSeller] = useMutation(ADD_SELLER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addBuyer({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });

    const token = mutationResponse.data.addBuyer.token;
    const decodedToken = jwt_decode(token);

    Auth.login(token);

    if (decodedToken.isSeller) {
      await addSeller({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;