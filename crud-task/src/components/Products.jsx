import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65d582f13f1ab8c63437231c.mockapi.io/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [deleteData]);

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`);
      setDeleteData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container fade-in">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="slide-in">
              <th scope="row">{item.id}</th>
              <td>{item.product_id}</td>
              <td>{item.product_name}</td>
              <td>${item.product_price}</td>
              <td>{item.product_description}</td>
              <td>
                <button onClick={() => handleEdit(item.id)} type="button" className="btn btn-outline-primary">
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/create')} type="button" className="btn btn-outline-primary btn-lg">
        + Create
      </button>
    </div>
  );
};

export default Products;
