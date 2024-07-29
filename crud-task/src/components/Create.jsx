import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: '',
    product_name: '',
    product_price: '',
    product_description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://65d582f13f1ab8c63437231c.mockapi.io/api/products', editData);
      navigate('/products');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container fade-in">
      <form onSubmit={handleFormSubmit} className="needs-validation" noValidate>
        {['product_id', 'product_name', 'product_price', 'product_description'].map((field) => (
          <div className="mb-3" key={field}>
            <label htmlFor={field} className="form-label">
              {field.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
            </label>
            <input
              type="text"
              name={field}
              className="form-control"
              id={field}
              value={editData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
