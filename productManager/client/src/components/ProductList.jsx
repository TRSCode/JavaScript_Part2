import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {

    const { product, setProduct } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <h3>All Products</h3>
            {
                product.map((product, index) => {
                return ( 
                    <div key={index}>
                        <p>Item: {product.title}</p>
                        <Link to={`/product/${product._id}`}> Veiw | </Link>
                        <Link to={'/product/edit/' + product._id}>Edit | </Link>
                        <hr/>
                    </div>
                    
                )})
            }
        </div>
    );
}

export default ProductList;
