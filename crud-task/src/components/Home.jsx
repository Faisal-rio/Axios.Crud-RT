import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

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
  }, []);

  return (
    <div className="container fade-in">
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
        {products.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={item.product_image}
                className="card-img-top"
                alt={item.product_name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.product_name}</h5>
                <p className="card-text">{item.product_description}</p>
                <p className="card-text">${item.product_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
