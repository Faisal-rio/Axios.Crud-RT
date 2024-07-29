import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    product_id: '',
    product_name: '',
    product_price: '',
    product_description: '',
  });

  useEffect(() => {
    const fetchEditData = async () => {
      try {
        const response = await axios.get(`https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`);
        setEditData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchEditData();
  }, [id]);

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
      await axios.put(`https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`, editData);
      navigate('/products');
    } catch (error) {
      console.error('Error updating product:', error);
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
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
