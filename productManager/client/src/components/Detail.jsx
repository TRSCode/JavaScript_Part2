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
        <div className="container p-2 bg-primary text-white col-3">
            <h3>{product.title}</h3>
            <hr/>
            <p><span className="text-black">Price: </span>{product.price}</p>
            <p><span className="text-black">Description: </span>{product.description}</p>
            <div className="d-flex justify-content-center">
                <Link to={'/home'} className="text-light"> Home |</Link>
                <Link to={'/product/edit/' + product._id} className="text-light"> Edit</Link>
                <button onClick={deleteProduct} className="btn btn-danger ms-2">
                    Delete
                </button>
            </div>
        </div>
    );
}
export default Detail;