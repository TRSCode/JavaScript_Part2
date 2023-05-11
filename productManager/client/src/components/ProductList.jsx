import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {

    const { removeFromDom, product, setProduct } = props;

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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h3 className="text-center p-3">All Products</h3>
            {
                product.map((product, index) => {
                return ( 
                    <div key={index} className='d-inline-flex mx-2 p-3'>
                        <div className="container bg-warning rounded-top p-2"> 
                            <p>{product.title}</p>
                            <Link to={`/product/${product._id}`}> Veiw |</Link>
                            <Link to={'/product/edit/' + product._id}> Edit</Link>
                            <button onClick={(e)=>{deleteProduct(product._id)}} className="btn btn-danger ms-2">
                                Delete
                            </button>
                        </div>
                    </div>
                    
                )})
            }
        </div>
    );
}

export default ProductList;
