import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_SELLER } from "../utils/mutations";
import Auth from "../utils/auth";

function SellerSignup() {
  const [formState, setFormState] = useState({
    guardianPresent: false,
    firstName: "",
    lastName: "",
    orgName: "",
    email: "",
    password: "",
    products: [],
  });
  const [addSeller] = useMutation(ADD_SELLER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addSeller({
      variables: {
        ...formState,
      },
    });

    const token = mutationResponse.data.addSeller.token;

    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleProductChange = (event, index) => {
    const { name, value } = event.target;
    const productsCopy = [...formState.products];
    productsCopy[index] = {
      ...productsCopy[index],
      [name]: value,
    };
    setFormState({
      ...formState,
      products: productsCopy,
    });
  };

  const handleAddProduct = () => {
    setFormState({
      ...formState,
      products: [...formState.products, {}],
    });
  };

  const handleRemoveProduct = (index) => {
    const productsCopy = [...formState.products];
    productsCopy.splice(index, 1);
    setFormState({
      ...formState,
      products: productsCopy,
    });
  };

  return (
    <div className="container my-1">
      <h2>Seller Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="guardianPresent">Is a guardian present?</label>
          <select
            name="guardianPresent"
            id="guardianPresent"
            value={formState.guardianPresent}
            onChange={handleChange}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
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
          <label htmlFor="orgName">Organization Name:</label>
          <input
            placeholder="Org Name"
            name="orgName"
            type="orgName"
            id="orgName"
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

        {/* Product section */}
        <h4>Add Products:</h4>
        {formState.products.map((product, index) => (
          <div key={index}>
            <div className="flex-row space-between my-2">
              <label htmlFor={`productName-${index}`}>Product Name:</label>
              <input
                placeholder="Product Name"
                name="productName"
                type="text"
                id={`productName-${index}`}
                value={product.productName || ""}
                onChange={(event) => handleProductChange(event, index)}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor={`productPrice-${index}`}>Price:</label>
              <input
                placeholder="Price"
                name="productPrice"
                type="number"
                id={`productPrice-${index}`}
                value={product.productPrice || ""}
                onChange={(event) => handleProductChange(event, index)}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor={`productDescription-${index}`}>
                Description:
              </label>
              <select
                name="productDescription"
                id={`productDescription-${index}`}
                value={product.productDescription || ""}
                onChange={(event) => handleProductChange(event, index)}
              >
                <option value="">Select a size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <button type="button" onClick={() => handleRemoveProduct(index)}>
              Remove Product
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>

        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SellerSignup;
