import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";

const Detail = (props) => {
    const [ product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err));
    }, []);

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log(res.data);
                navigate('/home');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container col-5 mt-3">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={'/home'}> Home |</Link>
            <Link to={'/product/edit/' + product._id}> Edit</Link>
            <button onClick={deleteProduct} className="btn btn-danger ms-2">
                Delete
            </button>
        </div>
    );
}
export default Detail;